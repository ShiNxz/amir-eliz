import Button from '@/app/UI/Button'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import Title, { variants, useStyle } from './Title'

const Buttons = () => {
	const { style } = useStyle()

	return (
		<div className='flex flex-row gap-5 p-8 items-center justify-center'>
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
		</div>
	)
}

export default Buttons
