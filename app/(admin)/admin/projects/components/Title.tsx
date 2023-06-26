'use client'

import { TiGroupOutline } from 'react-icons/ti'
import { Button } from '@mantine/core'
import { MdOutlineAddBusiness } from 'react-icons/md'
import useProjectsStore from '../store'

const Title = () => {
	const projects = useProjectsStore((state) => state.projects)
	const setModal = useProjectsStore((state) => state.setModal)

	return (
		<div className='flex flex-row items-end justify-between mb-10'>
			<div className='flex flex-col'>
				<h2 className='text-3xl font-semibold mb-3 text-gray-700'>ניהול פרויקטים</h2>
				<div className='flex flex-row items-center gap-2'>
					<TiGroupOutline className='text-sm text-gray-500' />
					<h6 className='text-sm font-medium text-gray-500 mb-0'>
						סה{'"'}כ פרויקטים:{' '}
						<span className='text-sm font-medium text-gray-700 mb-0 inline-block'>
							{projects.length || 0}
						</span>
					</h6>
				</div>
			</div>
			<Button
				color='gray'
				variant='gradient'
				size='sm'
				leftIcon={<MdOutlineAddBusiness />}
				onClick={() => setModal({ project: null, open: true })}
			>
				הוספת פרויקט
			</Button>
		</div>
	)
}

export default Title
