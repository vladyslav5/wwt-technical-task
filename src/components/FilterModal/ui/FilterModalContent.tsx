import { useTranslation } from 'react-i18next'

import {
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader
} from '@chakra-ui/react'

import { FilterItem } from '@components/FilterModal/ui/Filter/FilterItem.tsx'
import { FilterModalFooter } from '@components/FilterModal/ui/FilterModalFooter.tsx'
import useFilter from '@providers/Store/FilterStore.ts'

export const FilterModalContent = () => {
	const { t } = useTranslation()
	const { filters, check, reset } = useFilter()

	return (
		<ModalContent>
			<ModalHeader>{t('Filter')}</ModalHeader>
			<ModalCloseButton />
			<ModalBody>
				{filters.map(data => (
					<FilterItem
						check={check}
						key={data.id}
						{...data}
					/>
				))}
			</ModalBody>
			<FilterModalFooter onReset={reset} />
		</ModalContent>
	)
}
