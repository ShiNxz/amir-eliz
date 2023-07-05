import { fadeRight, fadeUp } from '@/utils/animations'
import { motion } from 'framer-motion'

const Title = () => {
	return (
		<div className='flex flex-col gap-2 container text-center mb-6'>
			<motion.h2
				className='text-2xl xl:text-6xl font-bold text-gray-950'
				variants={fadeUp}
				viewport={{ once: true }}
				whileInView='in'
				initial='start'
				custom={0}
			>
				פרויקטים אחרונים
			</motion.h2>
			<motion.div
				className='bg-gradient-to-r from-pink-700 to-pink-400 h-0.5 lg:h-1 w-16 mx-auto'
				variants={fadeUp}
				viewport={{ once: true }}
				whileInView='in'
				initial='start'
				custom={0.5}
			/>
			<motion.h6
				className='text-base lg:text-lg text-gray-800 w-2/3 mx-auto mb-8'
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
