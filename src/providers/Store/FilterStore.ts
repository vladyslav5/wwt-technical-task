import create from 'zustand'

import { FilterChoose } from '@api/types/Filter'

//
interface FilterStore {
	filters: FilterChoose[]
	check: (chooseId: string, optionId: string) => void
	reset: () => void
	loadFilters: (data: FilterChoose[]) => void
}

const useFilter = create<FilterStore>(set => ({
	filters: [
		{
			id: 'MEAL_OPTIONS',
			name: 'Meal options',
			description: 'Choose the type of dining',
			type: 'OPTION',
			options: [
				{
					id: 'breakfast',
					name: 'Breakfast included',
					description:
						'The stay comes with a complimentary morning meal to start your day.'
				},
				{
					id: 'lunch',
					name: 'Lunch included',
					description: 'Enjoy a midday meal included with your stay.'
				},
				{
					id: 'dinner',
					name: 'Dinner included',
					description:
						'Evening meals are provided as part of your accommodation package.'
				},
				{
					id: 'all-inclusive',
					name: 'All inclusive',
					description:
						'Covers all meals and drinks during your stay, often including extra services or activities.'
				},
				{
					id: 'all-inclusive1',
					name: 'All inclusive',
					description:
						'Covers all meals and drinks during your stay, often including extra services or activities.'
				},
				{
					id: 'all-inclsive',
					name: 'All inclusive',
					description:
						'Covers all meals and drinks during your stay, often including extra services or activities.'
				}
			]
		},
		{
			id: 'RULES_POLICIES_PAYMENT',
			name: 'Rules, Policies, and Payment',
			type: 'OPTION',
			options: [
				{
					id: 'free-cancellation',
					name: 'Free cancellation',
					description:
						'Option to cancel your booking without any charges, up to a certain date.'
				},
				{
					id: 'pets-allowed',
					name: 'Pets allowed',
					description:
						'Accommodations are pet-friendly, allowing you to bring your animal companions.'
				},
				{
					id: 'non-smoking-room',
					name: 'Non-Smoking room',
					description:
						'Rooms specifically designated as smoke-free for your comfort and health.'
				}
			]
		}
	],
	loadFilters: data => set(() => ({ filters: data })),
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
					options: choose.options.map(option => ({ ...option, checked: false }))
				}
			})
		}))
}))

export default useFilter
