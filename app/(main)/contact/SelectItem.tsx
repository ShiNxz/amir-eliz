'use client'

import { forwardRef } from 'react'
import { Text } from '@mantine/core'
import ServiceTypes from '@/data/ServiceTypes'

export const data = [
	...ServiceTypes.map((service) => ({
		label: `פיתוח ${service.short}`,
		value: `פיתוח ${service.short}`,
		description: service.description.slice(0, 120) + '...',
	})),
	{
		label: 'שיתוף פעולה',
		value: 'שיתוף פעולה',
		description: 'פנייה בנושא שיתוף פעולה, אנא פרטו בהודעה',
	},
	{
		label: 'אחר',
		value: 'אחר',
		description: 'פנייה בנושא אחר, אנא פרטו בהודעה',
	},
]

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
	image: string
	label: string
	description: string
}

// eslint-disable-next-line react/display-name
const SelectItem = forwardRef<HTMLDivElement, ItemProps>(({ label, description, ...others }: ItemProps, ref) => (
	<div
		ref={ref}
		{...others}
	>
		<Text size='sm'>{label}</Text>
		<Text
			size='xs'
			opacity={0.65}
		>
			{description}
		</Text>
	</div>
))

export default SelectItem
