import { FC } from 'react'

import { Modal, ModalOverlay } from '@chakra-ui/react'

import { FilterModalContent } from '@components/FilterModal/FilterModalContent.tsx'

interface FilterModalProps {
	isOpen: boolean
	onClose: () => void
}

export const FilterModal: FC<FilterModalProps> = ({ isOpen, onClose }) => {
	return (
		<Modal
			size={'100%'}
			isOpen={isOpen}
			onClose={onClose}
		>
			<ModalOverlay />
			<FilterModalContent />
		</Modal>
	)
}
