'use client'

import useCompaniesStore from '../store'
import { Button } from '@mantine/core'
import { SiWeblate } from 'react-icons/si'

const Title = () => {
	const domains = useCompaniesStore((state) => state.domains)
	const setModal = useCompaniesStore((state) => state.setModal)

	return (
		<div className='flex flex-row items-end justify-between mb-10'>
			<div className='flex flex-col'>
				<h2 className='text-3xl font-semibold mb-3 text-gray-700'>ניהול דומיינים</h2>
				<div className='flex flex-row items-center gap-2'>
					<SiWeblate className='text-sm text-gray-500' />
					<h6 className='text-sm font-medium text-gray-500 mb-0'>
						סה{'"'}כ דומיינים:{' '}
						<span className='text-sm font-medium text-gray-700 mb-0 inline-block'>
							{domains.length || 0}
						</span>
					</h6>
				</div>
			</div>
			<Button
				variant='gradient'
				size='sm'
				leftIcon={<SiWeblate />}
				onClick={() => setModal({ domain: null, open: true })}
				gradient={{ from: 'violet', to: 'grape' }}
			>
				הוספת דומיין
			</Button>
		</div>
	)
}

export default Title
