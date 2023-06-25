'use client'

import useAuth from '@/utils/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const CheckLogin = () => {
	const router = useRouter()
	const { isLoggedIn, user, isLoading } = useAuth()

	useEffect(() => {
		if (!isLoading && (!isLoggedIn || !user.verified)) router.push('/login')
	}, [isLoggedIn, isLoading])

	return <></>
}

export default CheckLogin
