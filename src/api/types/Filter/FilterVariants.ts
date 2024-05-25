import { FilterBase, FilterChooseOption, FilterType } from '.'

export interface FilterChoose extends FilterBase {
	type: FilterType
	allowAll?: boolean
	options: FilterChooseOption[]
}
