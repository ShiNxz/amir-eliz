import { motion } from 'framer-motion'
import ServiceTypes from '../../../../data/ServiceTypes'
import { fadeRight, fadeUp } from '@/utils/animations'

const Tabs = ({ tab, setTab }: IProps) => {
	return (
		<div className='flex flex-col xl:col-span-2 w-full'>
			<motion.h4
				className='font-bold text-4xl xl:text-6xl mb-6 w-full'
				variants={fadeRight}
				viewport={{ once: true }}
				whileInView='in'
				initial='start'
				custom={0}
			>
				השירותים שלי
			</motion.h4>
			{ServiceTypes.map((type, i) => {
				const TypeIcon = type.icon

				return (
					<Tab
						onClick={() => setTab(i)}
						active={tab === i}
						key={type.title}
						style={type.style}
						index={i}
					>
						<TypeIcon /> {type.title}
					</Tab>
				)
			})}
		</div>
	)
}

interface IProps {
	tab: number
	setTab: (tab: number) => void
}

const Tab = ({ children, active, onClick, style, index }: ITabProps) => {
	return (
		<motion.div
			className={`text-xl font-medium cursor-pointer duration-[500ms] transition-colors relative mb-4 py-1 z-20 w-full xl:w-fit px-4 flex flex-row items-center gap-2 ${
				active ? 'text-white' : 'text-gray-800'
			}`}
			onClick={onClick}
			variants={fadeUp}
			viewport={{ once: true }}
			whileInView='in'
			initial='start'
			custom={2 + index * 0.5}
		>
			{children}
			{active && (
				<motion.div
					layoutId='tabs'
					className={`absolute inset-0 w-full rounded-lg h-full bg-white bg-gradient-to-l -z-10 ${style} shadow-lg`}
				/>
			)}
		</motion.div>
	)
}

interface ITabProps {
	children: React.ReactNode
	active?: boolean
	onClick: () => void
	style: string
	index: number
}

export default Tabs
