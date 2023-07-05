'use client'

import { motion } from 'framer-motion'

const Particle = ({ style, variant }: { style: string; variant: 'RIGHT' | 'LEFT' }) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				right: variant === 'RIGHT' ? '50%' : 'auto',
				left: variant === 'LEFT' ? '50%' : 'auto',
			}}
			whileInView={{
				opacity: 0.22,
				right: variant === 'RIGHT' ? '60%' : 'auto',
				left: variant === 'LEFT' ? '60%' : 'auto',
				translateX: variant === 'RIGHT' ? '50%' : '-50%',
				transition: {
					duration: 0.5,
				},
			}}
			className={`absolute h-16 w-52 lg:w-72 lg:h-52 xl:h-56 xl:w-[550px] blur-[30px] xl:blur-[50px] rounded-full -top-4 lg:-top-24 xl:-top-32 right-1/2 ${style} ${
				variant === 'LEFT' ? '' : ''
			}`}
		/>
	)
}

export default Particle
