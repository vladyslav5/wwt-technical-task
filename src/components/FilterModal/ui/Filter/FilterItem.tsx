import { FC } from 'react'

import { Box, Checkbox, CheckboxGroup, Stack, Tooltip } from '@chakra-ui/react'

import { FilterOption } from '@components/FilterModal/types/filterOption.ts'

interface FilterItemProps {
	// id:string
	name: string
	description?: string
	options: FilterOption[]
}

export const FilterItem: FC<FilterItemProps> = ({
	name,
	options,
	description
}) => {
	return (
		<Box>
			<Tooltip label={description}>{name}</Tooltip>
			<CheckboxGroup colorScheme="green">
				<Stack
					spacing={[1, 5]}
					direction={['column', 'row']}
				>
					{options.map(({ id, name, description }) => (
						<Checkbox
							value={id}
							key={id}
						>
							<Tooltip label={description}>{name}</Tooltip>
						</Checkbox>
					))}
				</Stack>
			</CheckboxGroup>
			<hr />
		</Box>
	)
}
