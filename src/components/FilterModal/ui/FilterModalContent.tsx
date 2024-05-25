import { useTranslation } from 'react-i18next'

import {
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	Text
} from '@chakra-ui/react'

import { FilterModalFooter } from '@components/FilterModal/ui/FilterModalFooter.tsx'

export const FilterModalContent = () => {
	useTranslation()
	return (
		<ModalContent>
			{/* eslint-disable-next-line i18next/no-literal-string */}
			<ModalHeader>Modal Title</ModalHeader>
			<ModalCloseButton />
			<ModalBody>
				{/* eslint-disable-next-line i18next/no-literal-string */}
				<Text>Modal</Text>
			</ModalBody>
			<FilterModalFooter />
		</ModalContent>
	)
}
