import { fadeUp } from '@/utils/animations'
import { motion } from 'framer-motion'

const Description = () => {
	return (
		<motion.h2
			className='text-2xl text-gray-600 w-1/2 text-center mx-auto'
			variants={fadeUp}
			viewport={{ once: true }}
			whileInView='in'
			initial='start'
			custom={1}
		>
			לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום,
			לפריקך תצטריק לרטי. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קונדימנטום קורוס בליקרה, נונסטי
			קלובר בריקנה סטום, לפריקך תצטריק לרטי.
		</motion.h2>
	)
}

export default Description
