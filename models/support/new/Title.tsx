'use client'

import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import { BiRightArrowAlt } from 'react-icons/bi'
import { TiMessages } from 'react-icons/ti'

const Title = () => {
	const router = useRouter()

	return (
		<div className='flex flex-row items-end justify-between mb-10'>
			<div className='flex flex-col'>
				<h2 className='text-3xl font-semibold mb-3 text-gray-700'>פנייה חדשה</h2>
				<div className='flex flex-row items-center gap-2'>
					<TiMessages className='text-sm text-gray-500' />
					<h6 className='text-sm font-medium text-gray-500 mb-0'>
						פנייה מאפשרת לכם לקבל תמיכה ישירה מצוות האתר לכל תקלה או בעיה שתיתקלו בה.
					</h6>
				</div>
			</div>
			<Button
				variant='contained'
				onClick={() => router.push('/admin/support')}
				color='info'
			>
				<BiRightArrowAlt
					size={16}
					className='ml-1'
				/>
				חזור למסך הפניות
			</Button>
		</div>
	)
}

export default Title
