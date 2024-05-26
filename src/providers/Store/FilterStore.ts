import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { FilterChoose } from '@api/types/Filter'

import { FILTER_PATH, PERSIST_FLAG } from '@constants'

interface FilterStore {
	filters: FilterChoose[]
	check: (chooseId: string, optionId: string) => void
	reset: () => void
	loadFilters: () => void
	isLoading: boolean
}
const useFilter = create<FilterStore>()(
	persist(
		devtools(set => ({
			filters: [],
			isLoading: false,
			loadFilters: async () => {
				set({ isLoading: true })
				const result = await fetch(FILTER_PATH)
				const json = (await result.json()).filterItems as FilterChoose[]
				console.log('json', json)

				localStorage.setItem(PERSIST_FLAG, 'persist')
				set({ filters: json })
				set({ isLoading: false })
			},
			check: (chooseId: string, optionId: string) =>
				set(state => ({
					filters: state.filters.map(choose => {
						return choose.id === chooseId
							? {
									...choose,
									options: choose.options.map(option =>
										option.id === optionId
											? { ...option, checked: !option.checked }
											: option
									)
							  }
							: choose
					})
				})),
			reset: () =>
				set(state => ({
					filters: state.filters.map(choose => {
						return {
							...choose,
							options: choose.options.map(option => ({
								...option,
								checked: false
							}))
						}
					})
				}))
		})),
		{ name: 'filterStore', version: 1 }
	)
)

export default useFilter
