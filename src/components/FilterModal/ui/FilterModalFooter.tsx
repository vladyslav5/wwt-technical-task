import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Button, ModalFooter } from '@chakra-ui/react'

interface FilterModalFooterProps {
	onReset: () => void
}
export const FilterModalFooter: FC<FilterModalFooterProps> = ({ onReset }) => {
	const { t } = useTranslation()
	return (
		<ModalFooter>
			<Button
				color={'#FFFFFF'}
				borderRadius={'16'}
				px={'70px'}
				py={'26px'}
				backgroundColor={'#FF5F00'}
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
		</ModalFooter>
	)
}
