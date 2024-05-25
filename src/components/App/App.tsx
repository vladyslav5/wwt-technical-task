import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Box, Button } from '@chakra-ui/react'

import { FilterModal } from '@components/FilterModal/ui/FilterModal.tsx'

export const App = () => {
	const { t } = useTranslation()
	const [isOpen, setIsOpen] = useState(false)
	const onShowModal = () => {
		setIsOpen(true)
	}
	const onHideModal = () => {
		setIsOpen(false)
	}
	return (
		<Box
			maxW="90rem"
			mx="auto"
			minH="100dvh"
		>
			<Button
				variant={'ghost'}
				onClick={onShowModal}
			>
				{t('show filters')}
			</Button>
			<FilterModal
				isOpen={isOpen}
				onClose={onHideModal}
			/>
		</Box>
	)
}
