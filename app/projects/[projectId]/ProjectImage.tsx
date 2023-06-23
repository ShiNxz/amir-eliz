'use client'

import { fadeUp } from '@/utils/animations'
import { motion } from 'framer-motion'

const ProjectImage = () => (
	<motion.img
		src='https://img.start-app.co.il/upload_f99d8fae28d1fb5bbc3057760b139a1c.png'
		className='shadow-xl rounded h-full object-cover'
		variants={fadeUp}
		viewport={{ once: true }}
		whileInView='in'
		initial='start'
		custom={0}
	/>
)

export default ProjectImage
