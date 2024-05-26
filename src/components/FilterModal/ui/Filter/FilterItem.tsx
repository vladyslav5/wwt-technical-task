import { FC } from 'react'

import { Box, Checkbox, Grid, Text, Tooltip } from '@chakra-ui/react'

import { FilterChoose } from '@api/types/Filter'

import { textStyles } from '@providers/ThemeProvider/theme/base'

interface FilterItemProps extends FilterChoose {
	check: (chooseId: string, optionId: string) => void
}

export const FilterItem: FC<FilterItemProps> = ({
	id,
	description,
	name,
	options,
	check
}) => {
	return (
		<Box mt={'32px'}>
			<Tooltip label={description}>
				<Text
					w={'fit-content'}
					{...textStyles['headline-5']}
				>
					{name}
				</Text>
			</Tooltip>
			<Grid
				templateColumns={'repeat(auto-fill, minmax(min-content,30%))'}
				minWidth={'50%'}
				gap={'16px'}
				mb={'32px'}
				mt={'24px'}
			>
				{options.map(({ id: optionId, checked, name, description }) => (
					<Checkbox
						onChange={() => check(id, optionId)}
						value={optionId}
						isChecked={checked || false}
						key={optionId}
					>
						<Tooltip label={description}>
							<Text {...textStyles['body-text-6']}>{name}</Text>
						</Tooltip>
					</Checkbox>
				))}
			</Grid>
			<hr />
		</Box>
	)
}
