'use client'

import { motion } from 'framer-motion'

const Particle = ({ style }: { style: string }) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 0.25,
				transition: {
					duration: 0.8,
					delay: 0.5,
				},
			}}
			key={style}
			className={`absolute h-32 w-36 lg:h-52 lg:w-80 xl:h-[320px] xl:w-[650px] blur-[50px] rounded-full bg-gradient-to-r ${style} xl:-left-10 bottom-12 -z-10`}
		/>
	)
}

export default Particle
