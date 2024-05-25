import { FC } from 'react'

import { Modal, ModalOverlay } from '@chakra-ui/react'

import { FilterModalContent } from '@components/FilterModal/ui/FilterModalContent.tsx'
import { modalTheme } from '@providers/ThemeProvider/theme/components'

interface FilterModalProps {
	isOpen: boolean
	onClose: () => void
}

export const FilterModal: FC<FilterModalProps> = ({ isOpen, onClose }) => {
	return (
		<Modal
			{...modalTheme}
			size={'100%'}
			isOpen={isOpen}
			onClose={onClose}
		>
			<ModalOverlay />
			<FilterModalContent />
		</Modal>
	)
}
