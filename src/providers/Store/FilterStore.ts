import create from 'zustand'

import { FilterChoose } from '@api/types/Filter'

interface FilterStore {
	filters: FilterChoose[]
	check: (itemId: string) => void
	reset: () => void
	loadFilters: (data: FilterChoose[]) => void
}

const useFilter = create<FilterStore>(set => ({
	filters: [],
	loadFilters: data => set(() => ({ filters: data })),
	check: (itemId: string) =>
		set(state => ({
			filters: state.filters.map(choose => {
				return choose.id === itemId ? { ...choose, checked: true } : choose
			})
		})),
	reset: () =>
		set(state => ({
			filters: state.filters.map(choose => {
				return { ...choose, checked: false }
			})
		}))
}))

export default useFilter
