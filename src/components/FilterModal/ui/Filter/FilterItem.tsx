import { FC } from 'react'

import { Box, Checkbox, CheckboxGroup, Stack, Text } from '@chakra-ui/react'

import { FilterOption } from '@components/FilterModal/types/filterOption.ts'

interface FilterItemProps {
	// id:string
	name: string
	options: FilterOption[]
}

export const FilterItem: FC<FilterItemProps> = ({ name, options }) => {
	return (
		<Box>
			<Text>{name}</Text>
			<CheckboxGroup
				colorScheme="green"
				defaultValue={['naruto', 'kakashi']}
			>
				<Stack
					spacing={[1, 5]}
					direction={['column', 'row']}
				>
					{options.map(({ id, name /*description*/ }) => (
						<Checkbox
							key={id}
							value={id}
						>
							{name}
						</Checkbox>
					))}
				</Stack>
			</CheckboxGroup>
			<hr />
		</Box>
	)
}
