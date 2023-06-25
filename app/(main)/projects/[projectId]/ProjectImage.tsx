'use client'

import { fadeUp } from '@/utils/animations'
import { motion } from 'framer-motion'

const ProjectImage = ({ image }: { image: string }) => (
	<motion.img
		src={image}
		className='shadow-xl rounded h-full object-cover'
		variants={fadeUp}
		viewport={{ once: true }}
		whileInView='in'
		initial='start'
		custom={0}
	/>
)

export default ProjectImage
