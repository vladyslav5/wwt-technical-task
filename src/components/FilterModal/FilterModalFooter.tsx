import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Button, ModalFooter, Stack } from '@chakra-ui/react'

import { ConfirmationModal } from '@components/ConfirmationModal/'
import useFilter from '@providers/Store/FilterStore.ts'

interface FilterModalFooterProps {
	onReset: () => void
}
export const FilterModalFooter: FC<FilterModalFooterProps> = ({ onReset }) => {
	const [confirmation, setConfirmation] = useState(false)

	const { filters, oldFilters } = useFilter()
	const isEqual = JSON.stringify(oldFilters) === JSON.stringify(filters)
	const onApply = () => {
		setConfirmation(true)
	}
	const { t } = useTranslation()
	return (
		<ModalFooter>
			<ConfirmationModal
				onClose={() => {
					setConfirmation(false)
				}}
				isOpen={confirmation}
			/>
			<Stack
				w={'100%'}
				justifyContent={'space-between'}
				direction={['row']}
			>
				<div></div>
				<Button
					color={'#FFFFFF'}
					isDisabled={isEqual}
					borderRadius={'16'}
					px={'70px'}
					py={'26px'}
					backgroundColor={'#FF5F00'}
					onClick={onApply}
				>
					{t('Apply')}
				</Button>
				<Button
					color={'#078691'}
					variant={'link'}
					onClick={onReset}
				>
					{t('Clear all parameters')}
				</Button>
			</Stack>
		</ModalFooter>
	)
}
