import Button from '@/app/UI/Button'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { variants, useStyle } from './Title'
import { motion } from 'framer-motion'
import { fadeUp } from '@/utils/animations'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll';

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
			<Link href='/contact'>
				<Button
					variant='bordered'
					color='gradient'
					className={`${variants[style].style} ${variants[style].shadow}`}
				>
					צור קשר
				</Button>
			</Link>
			<ScrollLink to='main' smooth duration={500}>
				<Button
					variant='bordered'
					className='!font-normal'
				>
					קרא עוד <HiOutlineArrowNarrowLeft className='mr-6' />
				</Button>
			</ScrollLink>
		</motion.div>
	)
}

export default Buttons
