'use client'

import { Checkbox, Collapse } from '@mantine/core'
import useProjectsStore, { NameToKey } from './Store'
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
			filters: types,
		},
		{
			title: 'טכנולוגיות',
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
					index={index}
				/>
			))}
		</div>
	)
}

const FilterGroup = ({ title, filters, index }: { title: string; filters: string[]; index: number }) => {
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
					/>
				))}
			</Collapse>
		</div>
	)
}

const Filter = ({ title, keys, index }: { title: string; keys: string; index: number }) => {
	const filters = useFilters((store) => store.filters)
	const addFilter = useFilters((store) => store.addFilter)
	const removeFilter = useFilters((store) => store.removeFilter)

	const isInFilters = filters.includes(NameToKey(keys))

	return (
		<motion.div
			className='p-3 bg-gray-100 hover:bg-gray-200 rounded-md duration-200 transition-colors cursor-pointer mb-2'
			onClick={() => (isInFilters ? removeFilter(NameToKey(keys)) : addFilter(NameToKey(keys)))}
			variants={fadeUp}
			viewport={{ once: true }}
			whileInView='in'
			initial='start'
			custom={1 + index * 1}
		>
			<Checkbox
				label={title}
				color='dark'
				size='sm'
				checked={isInFilters}
				onChange={() => (isInFilters ? removeFilter(NameToKey(keys)) : addFilter(NameToKey(keys)))}
			/>
		</motion.div>
	)
}

export default Filters
