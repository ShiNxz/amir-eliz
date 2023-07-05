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
				opacity: 0.25,
				right: variant === 'RIGHT' ? '60%' : 'auto',
				left: variant === 'LEFT' ? '60%' : 'auto',
				translateX: variant === 'RIGHT' ? '50%' : '-50%',
				transition: {
					duration: 0.5,
				},
			}}
			className={`absolute h-20 w-72 sm:w-96 lg:w-72 lg:h-52 xl:h-[220px] xl:w-[800px] blur-[30px] xl:blur-[50px] rounded-full -bottom-4 xl:-bottom-32 right-1/2 ${style} ${
				variant === 'LEFT' ? '' : ''
			}`}
		/>
	)
}

export default Particle
