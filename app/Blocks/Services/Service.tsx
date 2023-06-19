import { AnimatePresence, motion } from 'framer-motion'
import ServiceTypes from '../../../data/ServiceTypes'
import { fadeRight, fadeUpSlide } from '@/utils/animations'

const Service = ({ tab }: IProps) => {
	const service = ServiceTypes[tab]

	return (
		<div className='flex flex-col gap-4 col-span-3'>
			<AnimatePresence key={tab.toString()}>
				<motion.h4
					className='text-5xl font-semibold'
					variants={fadeRight}
					viewport={{ once: true }}
					whileInView='in'
					initial='start'
					custom={2}
				>
					{service.title}
				</motion.h4>
				<motion.p
					className={`pr-4 relative before:absolute before:w-1 before:h-full before:right-0 before:bg-gradient-to-br mb-4 ${service.style}`}
					variants={fadeUpSlide}
					viewport={{ once: true }}
					whileInView='in'
					initial='start'
					custom={3}
				>
					{service.description}
				</motion.p>
				<motion.img
					src={service.image}
					alt={service.title}
					className='w-full h-96 shadow-lg rounded-lg object-cover'
					variants={fadeUpSlide}
					viewport={{ once: true }}
					whileInView='in'
					initial='start'
					key={tab}
					custom={4}
				/>
			</AnimatePresence>
		</div>
	)
}

interface IProps {
	tab: number
}

export default Service
