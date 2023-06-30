'use client'

import { TiMessages } from 'react-icons/ti'
import useContactFormsStore from '../store'

const Title = () => {
	const forms = useContactFormsStore((state) => state.forms)

	return (
		<div className='flex flex-row items-end justify-between mb-10'>
			<div className='flex flex-col'>
				<h2 className='text-3xl font-semibold mb-3 text-gray-700'>ניהול פניות</h2>
				<div className='flex flex-row items-center gap-2'>
					<TiMessages className='text-sm text-gray-500' />
					<h6 className='text-sm font-medium text-gray-500 mb-0'>
						סה{'"'}כ פניות:{' '}
						<span className='text-sm font-medium text-gray-700 mb-0 inline-block'>{forms.length || 0}</span>
					</h6>
				</div>
			</div>
		</div>
	)
}

export default Title
