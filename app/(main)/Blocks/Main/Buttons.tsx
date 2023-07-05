import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { variants, useStyle } from './Title'
import { motion } from 'framer-motion'
import { fadeUp } from '@/utils/animations'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll';
import Button from '../../UI/Button'

const Buttons = () => {
	const { style } = useStyle()

	return (
		<motion.div
			className='flex flex-col sm:flex-row gap-5 p-8 items-center justify-center w-full sm:w-fit'
			viewport={{ once: true }}
			variants={fadeUp}
			whileInView='in'
			initial='start'
			custom={2}
		>
			<Link href='/contact' className='w-full sm:w-fit text-center items-center'>
				<Button
					variant='bordered'
					color='gradient'
					className={`${variants[style].style} ${variants[style].shadow} w-full sm:w-fit justify-center`}
					gradientClassName='w-full sm:w-fit justify-center'
				>
					צור קשר
				</Button>
			</Link>
			<ScrollLink to='main' smooth duration={500} className='sm:w-fit w-full' href='/'>
				<Button
					variant='bordered'
					className='!font-normal w-full sm:w-fit justify-center'
					gradientClassName='w-full sm:w-fit justify-center'
				>
					קרא עוד <HiOutlineArrowNarrowLeft className='mr-6' />
				</Button>
			</ScrollLink>
		</motion.div>
	)
}

export default Buttons
