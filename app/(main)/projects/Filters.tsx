'use client'

import { Checkbox, Collapse } from '@mantine/core'
import useProjectsStore from './Store'
import useFilters from './Store'
import { motion } from 'framer-motion'
import { fadeRight, fadeUp } from '@/utils/animations'
import { IoIosArrowUp } from 'react-icons/io'
import { useDisclosure } from '@mantine/hooks'

const Filters = () => {
	const types = useProjectsStore((page) => page.types)
	const techs = useProjectsStore((page) => page.techs)

	const filterTypes = [
		{
			title: 'סוג האתר',
			key: 'type',
			filters: types,
		},
		{
			title: 'טכנולוגיות',
			key: 'techs',
			filters: techs,
		},
	]

	return (
		<div className='flex flex-col gap-8 col-span-1'>
			{filterTypes.map((filterType, index) => (
				<FilterGroup
					key={filterType.title}
					title={filterType.title}
					filters={filterType.filters}
					filterKey={filterType.key}
					index={index}
				/>
			))}
		</div>
	)
}

const FilterGroup = ({
	title,
	filters,
	index,
	filterKey,
}: {
	title: string
	filters: string[]
	index: number
	filterKey: string
}) => {
	const [opened, { toggle }] = useDisclosure(index === 0)

	return (
		<div className='flex flex-col'>
			<div
				className='flex flex-row items-center justify-between cursor-pointer'
				onClick={toggle}
			>
				<motion.h4
					className='text-2xl font-semibold'
					variants={fadeRight}
					viewport={{ once: true }}
					whileInView='in'
					initial='start'
					custom={1 + index * 2}
				>
					{title}
				</motion.h4>
				<IoIosArrowUp className={opened ? 'duration-200' : 'duration-200 rotate-180'} />
			</div>
			<motion.div
				className='w-full h-0.5 block bg-gray-200 mt-2 mb-4'
				variants={fadeRight}
				viewport={{ once: true }}
				whileInView='in'
				initial='start'
				custom={1 + index * 2}
			/>

			<Collapse
				in={opened}
				key={title}
			>
				{filters.map((filter, filterIndex) => (
					<Filter
						key={filter}
						keys={filter}
						title={filter}
						index={filterIndex + index * 2}
						filterKey={filterKey}
					/>
				))}
			</Collapse>
		</div>
	)
}

const Filter = ({
	title,
	keys,
	index,
	filterKey,
}: {
	title: string
	keys: string
	index: number
	filterKey: string
}) => {
	const filters = useFilters((store) => store.filters)
	const addFilter = useFilters((store) => store.addFilter)
	const removeFilter = useFilters((store) => store.removeFilter)

	const isInFilters = filters.includes(`${filterKey}:${keys}`)

	return (
		<motion.div
			className='p-3 bg-gray-100 hover:bg-gray-200 rounded-md duration-200 transition-colors cursor-pointer mb-2 flex flex-row items-center gap-2 text-sm'
			onClick={() => (isInFilters ? removeFilter(`${filterKey}:${keys}`) : addFilter(`${filterKey}:${keys}`))}
			variants={fadeUp}
			viewport={{ once: true }}
			whileInView='in'
			initial='start'
			custom={1 + index * 1}
		>
			<Checkbox
				color='dark'
				size='sm'
				checked={isInFilters}
				onChange={() =>
					isInFilters ? removeFilter(`${filterKey}:${keys}`) : addFilter(`${filterKey}:${keys}`)
				}
			/>
			<span>{title}</span>
		</motion.div>
	)
}

export default Filters
