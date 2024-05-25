import { useTranslation } from 'react-i18next'

import {
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader
} from '@chakra-ui/react'

import { FilterItem } from '@components/FilterModal/ui/Filter/FilterItem.tsx'
import { FilterModalFooter } from '@components/FilterModal/ui/FilterModalFooter.tsx'

const filterData = [
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
]

export const FilterModalContent = () => {
	const { t } = useTranslation()

	return (
		<ModalContent>
			<ModalHeader>{t('Filter')}</ModalHeader>
			<ModalCloseButton />
			<ModalBody>
				{filterData.map(data => (
					<FilterItem
						key={data.id}
						{...data}
					/>
				))}
			</ModalBody>
			<FilterModalFooter />
		</ModalContent>
	)
}
