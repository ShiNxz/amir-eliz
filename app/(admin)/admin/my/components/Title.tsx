'use client'

import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import useProjectsStore from '../store'

const Title = () => {
	const projects = useProjectsStore((state) => state.projects)

	return (
		<div className='flex flex-row items-end justify-between mb-10'>
			<div className='flex flex-col'>
				<h2 className='text-3xl font-semibold mb-3 text-gray-700'>ניהול פרויקטים</h2>
				<div className='flex flex-row items-center gap-2'>
					<AiOutlineFundProjectionScreen className='text-sm text-gray-500' />
					<h6 className='text-sm font-medium text-gray-500 mb-0'>
						סה{'"'}כ פרויקטים:{' '}
						<span className='text-sm font-medium text-gray-700 mb-0 inline-block'>
							{projects.length || 0}
						</span>
					</h6>
				</div>
			</div>
		</div>
	)
}

export default Title
