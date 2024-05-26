import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Box, Button, Spinner } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { FilterModal } from '@components/FilterModal/ui/FilterModal.tsx'
import useFilter from '@providers/Store/FilterStore.ts'

const queryClient = new QueryClient()
export const App = () => {
	const { t } = useTranslation()
	const [isOpen, setIsOpen] = useState(true)
	const { isLoading, loadFilters } = useFilter()
	useEffect(() => {
		loadFilters()
	}, [])

	const onShowModal = () => {
		setIsOpen(true)
	}
	const onHideModal = () => {
		setIsOpen(false)
	}
	return (
		<QueryClientProvider client={queryClient}>
			<Box
				maxW="90rem"
				mx="auto"
				minH="100dvh"
			>
				{isLoading ? (
					<Spinner />
				) : (
					<>
						{' '}
						<Button
							variant={'ghost'}
							onClick={onShowModal}
						>
							{t('show filters')}
						</Button>
						<FilterModal
							isOpen={isOpen}
							onClose={onHideModal}
						/>{' '}
					</>
				)}
			</Box>
		</QueryClientProvider>
	)
}
