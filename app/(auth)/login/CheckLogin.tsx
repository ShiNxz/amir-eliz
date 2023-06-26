'use client'

import useAuth from '@/utils/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const CheckLogin = () => {
	const router = useRouter()
	const { isLoggedIn, isLoading } = useAuth()

	useEffect(() => {
		if (!isLoading && isLoggedIn) router.push('/admin')
	}, [isLoggedIn, isLoading])

	return <></>
}

export default CheckLogin
