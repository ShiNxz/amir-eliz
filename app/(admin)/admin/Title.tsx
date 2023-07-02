'use client'

import useAuth from '@/utils/hooks/useAuth'
import ProjectSelect from './ProjectSelect'

const Title = () => {
	const { user } = useAuth()

	return (
		<div className='flex md:flex-row flex-col justify-between md:items-center items-start'>
			<h2 className='text-2xl md:text-4xl font-semibold text-gray-700'>ברוך הבא, {user!.user.name}</h2>
			<ProjectSelect />
		</div>
	)
}

export default Title
