import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Box, Button, Spinner } from '@chakra-ui/react'

import { FilterModal } from '@components/FilterModal/'
import { PERSIST_FLAG } from '@constants'
import useFilter from '@providers/Store/FilterStore.ts'

export const App = () => {
	const { t } = useTranslation()
	const [isOpen, setIsOpen] = useState(true)
	const { isLoading, loadFilters, filters } = useFilter()
	useEffect(() => {
		const persist = localStorage.getItem(PERSIST_FLAG)
		persist && loadFilters()
	}, [])
	const onShowModal = () => {
		setIsOpen(true)
	}
	const onHideModal = () => {
		setIsOpen(false)
	}
	const [isJsonOpen, setIsJsonOpen] = useState(false)
	return (
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
			<Button onClick={() => setIsJsonOpen(!isJsonOpen)}>
				{t('toggle json data')}
			</Button>
			<Box hidden={!isJsonOpen}>{JSON.stringify(filters, null, 2)}</Box>
		</Box>
	)
}
