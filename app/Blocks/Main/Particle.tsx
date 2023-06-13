'use client'

import { motion } from 'framer-motion'

const Particle = ({ style, variant }: { style: string; variant: 'TL' | 'BR' }) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				top: variant === 'TL' ? '-50%' : '-25%',
			}}
			whileInView={{
				opacity: 0.30,
				top: variant === 'TL' ? '10%' : '60%',
				transition: {
					duration: 0.5,
				},
			}}
			className={`absolute h-80 w-80 blur-[110px] bg-gradient-to-r rounded-full ${style} -z-10 ${
				variant === 'TL' ? 'left-[-5%]' : 'right-[-5%]'
			}`}
		/>
	)
}

export default Particle
