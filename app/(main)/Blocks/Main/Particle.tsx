'use client'

import { motion } from 'framer-motion'

const Particle = ({ style, variant }: { style: string; variant: 'TL' | 'BR' }) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				top: variant === 'TL' ? '40%' : '50%',
			}}
			whileInView={{
				opacity: 0.30,
				top: variant === 'TL' ? '10%' : '60%',
				transition: {
					duration: 0.7,
				},
			}}
			className={`absolute h-52 w-36 2xl:h-80 2xl:w-80 blur-3xl xl:blur-[110px] bg-gradient-to-r rounded-full ${style} -z-10 ${
				variant === 'TL' ? 'left-[-5%]' : 'right-[-5%]'
			}`}
		/>
	)
}

export default Particle
