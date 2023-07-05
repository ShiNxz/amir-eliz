'use client'

import { fadeUp } from '@/utils/animations'
import { motion } from 'framer-motion'

const Title = () => {
	return (
		<div className='flex flex-col gap-2 container text-center'>
			<motion.h2
				className='text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-950'
				variants={fadeUp}
				viewport={{ once: true }}
				whileInView='in'
				initial='start'
				custom={0}
			>
				תיק עבודות
			</motion.h2>
			<motion.div
				className='bg-gradient-to-r from-purple-500 to-pink-500 h-0.5 lg:h-1 w-16 mx-auto'
				variants={fadeUp}
				viewport={{ once: true }}
				whileInView='in'
				initial='start'
				custom={0.5}
			/>
			<motion.h6
				className='text-lg xl:text-xl text-gray-800 px-2 lg:px-0 lg:w-2/3 mx-auto mb-8'
				variants={fadeUp}
				viewport={{ once: true }}
				whileInView='in'
				initial='start'
				custom={1}
			>
				לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך.
				הועניב היושבב שערש שמחויט
			</motion.h6>
		</div>
	)
}

export default Title
