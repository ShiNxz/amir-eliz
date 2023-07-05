'use client'

import useAuth from '@/utils/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const CheckAdmin = () => {
	const router = useRouter()
	const { isLoggedIn, isLoading, user } = useAuth()
	const isAdmin = !!user?.user.isAdmin

	useEffect(() => {
		if (!isLoading && !isLoggedIn && !isAdmin) router.push('/my')
	}, [isLoggedIn, isLoading, isAdmin])

	return <></>
}

export default CheckAdmin
