import Button from '@/app/UI/Button'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { variants, useStyle } from './Title'
import { motion } from 'framer-motion'
import { fadeUp } from '@/utils/animations'

const Buttons = () => {
	const { style } = useStyle()

	return (
		<motion.div
			className='flex flex-row gap-5 p-8 items-center justify-center'
			viewport={{ once: true }}
			variants={fadeUp}
			whileInView='in'
			initial='start'
			custom={2}
		>
			<Button
				variant='bordered'
				color='gradient'
				className={`${variants[style].style} ${variants[style].shadow}`}
			>
				צור קשר
			</Button>
			<Button
				variant='bordered'
				className='!font-normal'
			>
				קרא עוד <HiOutlineArrowNarrowLeft className='mr-6' />
			</Button>
		</motion.div>
	)
}

export default Buttons
