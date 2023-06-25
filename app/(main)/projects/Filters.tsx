'use client'

import { Checkbox } from '@mantine/core'
import useProjectsStore, { NameToKey } from './Store'
import useFilters from './Store'
import { motion } from 'framer-motion'
import { fadeRight, fadeUp } from '@/utils/animations'

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
				<div
					className='flex flex-col'
					key={filterType.title}
				>
					<motion.h4
						className='text-2xl font-semibold'
						variants={fadeRight}
						viewport={{ once: true }}
						whileInView='in'
						initial='start'
						custom={1 + index * 2}
					>
						{filterType.title}
					</motion.h4>
					<motion.div
						className='w-full h-0.5 block bg-gray-200 mt-2 mb-4'
						variants={fadeRight}
						viewport={{ once: true }}
						whileInView='in'
						initial='start'
						custom={1 + index * 2}
					/>
					<div className='flex flex-col gap-2'>
						{filterType.filters.map((filter, filterIndex) => (
							<Filter
								key={filter}
								keys={filter}
								title={filter}
								index={filterIndex + index * 2}
							/>
						))}
					</div>
				</div>
			))}
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
			className='p-3 bg-gray-100 hover:bg-gray-200 rounded-md duration-200 transition-colors cursor-pointer'
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
