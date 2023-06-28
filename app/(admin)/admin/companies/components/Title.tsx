'use client'

import useCompaniesStore from '../store'
import { TiGroupOutline } from 'react-icons/ti'
import { Button } from '@mantine/core'
import { MdOutlineAddBusiness } from 'react-icons/md'

const Title = () => {
	const companies = useCompaniesStore((state) => state.companies)
	const setModal = useCompaniesStore((state) => state.setModal)

	return (
		<div className='flex flex-row items-end justify-between mb-10'>
			<div className='flex flex-col'>
				<h2 className='text-3xl font-semibold mb-3 text-gray-700'>ניהול חברות</h2>
				<div className='flex flex-row items-center gap-2'>
					<TiGroupOutline className='text-sm text-gray-500' />
					<h6 className='text-sm font-medium text-gray-500 mb-0'>
						סה{'"'}כ חברות:{' '}
						<span className='text-sm font-medium text-gray-700 mb-0 inline-block'>
							{companies.length || 0}
						</span>
					</h6>
				</div>
			</div>
			<Button
				color='gray'
				variant='gradient'
				size='sm'
				leftIcon={<MdOutlineAddBusiness />}
				onClick={() => setModal({ company: null, open: true })}
			>
				הוספת חברה
			</Button>
		</div>
	)
}

export default Title
