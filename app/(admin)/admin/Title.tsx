'use client'

import useAuth from '@/utils/hooks/useAuth'

const Title = () => {
	const { user } = useAuth()

	return <h2 className='text-3xl font-semibold mb-6 text-gray-700'>ברוך הבא, {user!.user.name}</h2>
}

export default Title
