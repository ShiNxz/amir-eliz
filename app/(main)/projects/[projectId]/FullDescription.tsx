'use client'

import { motion } from 'framer-motion'
import { fade } from '@/utils/animations'

const FullDescription = ({ fullDescription }: { fullDescription: string }) => {
	return (
		<motion.div
			variants={fade}
			viewport={{ once: true }}
			whileInView='in'
			initial='start'
			custom={2}
		>
			<div dangerouslySetInnerHTML={{ __html: fullDescription }} />
		</motion.div>
	)
}

export default FullDescription
