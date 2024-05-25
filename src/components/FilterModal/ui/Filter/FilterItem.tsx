import { FC } from 'react'

import {
	Box,
	Checkbox,
	CheckboxGroup,
	Grid,
	Text,
	Tooltip
} from '@chakra-ui/react'

import { FilterChoose } from '@api/types/Filter'

import { textStyles } from '@providers/ThemeProvider/theme/base'
import { checkboxTheme } from '@providers/ThemeProvider/theme/components'

export const FilterItem: FC<FilterChoose> = ({
	description,
	name,
	options
}) => {
	return (
		<Box mt={'32px'}>
			<Tooltip label={description}>
				<Text {...textStyles['headline-5']}>{name}</Text>
			</Tooltip>
			<CheckboxGroup colorScheme="green">
				<Grid
					templateColumns={'repeat(auto-fill, minmax(min-content,30%))'}
					minWidth={'50%'}
					gap={'16px'}
					mb={'32px'}
					mt={'24px'}
				>
					{options.map(({ id, name, description }) => (
						<Checkbox
							{...checkboxTheme}
							value={id}
							key={id}
						>
							<Tooltip label={description}>
								<Text {...textStyles['body-text-6']}>{name}</Text>
							</Tooltip>
						</Checkbox>
					))}
				</Grid>
			</CheckboxGroup>
			<hr />
		</Box>
	)
}
