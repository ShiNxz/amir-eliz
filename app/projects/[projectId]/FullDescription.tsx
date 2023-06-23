'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/utils/animations'

const FullDescription = () => {
	return (
		<motion.p
			variants={fadeUp}
			viewport={{ once: true }}
			whileInView='in'
			initial='start'
			custom={1}
		>
			לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך.
			הועניב היושבב שערש שמחויט לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית קרהשק סכעיט דז מא, מנכם
			למטכין נשואי מנורך. הועניב היושבב שערש שמחויט לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית
			קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. הועניב היושבב שערש שמחויט
		</motion.p>
	)
}

export default FullDescription
