'use client'

import { fadeUp } from '@/utils/animations'
import { motion } from 'framer-motion'

const Title = () => {
	return (
		<motion.h2
			className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-950 mb-2 text-center sm:text-right'
			variants={fadeUp}
			viewport={{ once: true }}
			whileInView='in'
			initial='start'
			custom={0}
		>
			צריכים פיתוח אתר? יש לכם רעיון לפיתוח או שיתוף פעולה? <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500'>בואו נדבר!</span>
		</motion.h2>
	)
}

export default Title
