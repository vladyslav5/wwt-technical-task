import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import {
	Button,
	Modal,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Stack
} from '@chakra-ui/react'

interface ConfirmationModal {
	isOpen: boolean
	onClose: () => void
}

export const ConfirmationModal: FC<ConfirmationModal> = ({
	isOpen,
	onClose
}) => {
	const { t } = useTranslation()
	return (
		<Modal
			// closeOnOverlayClick={false}
			size={'100%'}
			isOpen={isOpen}
			onClose={onClose}
		>
			<ModalOverlay
				bg="blackAlpha.300"
				backdropFilter="blur(10px) hue-rotate(90deg)"
			/>
			<ModalContent>
				<ModalHeader>{t('Do you want to apply new filter')}</ModalHeader>
				<ModalFooter>
					<Stack
						w={'100%'}
						gap={'32px'}
						justifyContent={'center'}
						direction={['row']}
					>
						<Button
							color={'#474747'}
							backgroundColor={'white'}
							borderRadius={'16'}
							border={'2px solid #474747'}
							px={'70px'}
							py={'26px'}
							// onClick={onReset}
						>
							{t('Use old filter')}
						</Button>
						<Button
							color={'#FFFFFF'}
							borderRadius={'16'}
							px={'70px'}
							py={'26px'}
							backgroundColor={'#FF5F00'}
						>
							{t('Apply new filter')}
						</Button>
					</Stack>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}
