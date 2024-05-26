import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { FilterChoose } from '@api/types/Filter'

import { FILTER_PATH } from '@constants'

interface FilterStore {
	filters: FilterChoose[]
	oldFilters: FilterChoose[]
	check: (chooseId: string, optionId: string) => void
	reset: () => void
	loadFilters: () => void
	isLoading: boolean
	saveFilters: () => void
	restoreFilters: () => void
}
const useFilter = create<FilterStore>()(
	persist(
		devtools(set => ({
			filters: [],
			oldFilters: [],
			isLoading: false,
			loadFilters: async () => {
				set({ isLoading: true })
				const result = await fetch(FILTER_PATH)
				const json = (await result.json()).filterItems as FilterChoose[]
				console.log('json', json)
				set({ oldFilters: json })
				set({ filters: json })
				set({ isLoading: false })
			},
			saveFilters: () => set(state => ({ oldFilters: state.filters })),
			restoreFilters: () => set(state => ({ filters: state.oldFilters })),
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
