import { AnimatePresence, motion } from 'framer-motion'
import ServiceTypes from '../../../../data/ServiceTypes'
import { fadeRight2, fadeUpSlide } from '@/utils/animations'

const Service = ({ tab }: IProps) => {
	const service = ServiceTypes[tab]

	return (
		<div className='flex flex-col gap-4 col-span-3'>
			<AnimatePresence key={ServiceTypes[tab].title}>
				<motion.h4
					className='text-3xl lg:text-4xl xl:text-5xl font-semibold'
					variants={fadeRight2}
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
					height={667}
					width={384}
					variants={fadeUpSlide}
					viewport={{ once: true }}
					whileInView='in'
					initial='start'
					custom={4}
					loading='lazy'
					title={service.title}
				/>
			</AnimatePresence>
		</div>
	)
}

interface IProps {
	tab: number
}

export default Service
