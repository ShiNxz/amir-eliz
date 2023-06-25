'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/utils/animations'

const FullDescription = ({ fullDescription }: { fullDescription: string }) => {
	return (
		<motion.p
			variants={fadeUp}
			viewport={{ once: true }}
			whileInView='in'
			initial='start'
			custom={1}
		>
			{fullDescription}
		</motion.p>
	)
}

export default FullDescription
