import { motion } from 'framer-motion'

const Particle = ({ style, variant }: { style: string; variant: 'TL' | 'BR' }) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				top: variant === 'TL' ? '0%' : '100%',
			}}
			whileInView={{
				opacity: 0.3,
				top: variant === 'TL' ? '-25%' : '25%',
				transition: {
					duration: 0.3,
				},
			}}
			className={`absolute h-96 w-96 blur-[120px] bg-gradient-to-r rounded-full ${style} -z-10 ${
				variant === 'TL' ? 'left-[-10%]' : 'right-[-10%]'
			}`}
		/>
	)
}

export default Particle
