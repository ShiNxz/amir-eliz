import type { IAuthUser } from '@/pages/api/auth'
import useSWR from 'swr'
import cookie from 'js-cookie'
import { useRouter } from 'next/navigation'
import fetcher from '@/utils/fetcher'

const useAuth = (): IAuth => {
	const router = useRouter()

	const { data, mutate, error } = useSWR('/api/auth', fetcher)
	const user: IAuthUser | null = data?.user || null

	const isLoading = !data && !error
	const isLoggedIn = !!user && !error

	const logout = async () => {
		cookie.remove('token')
		await mutate()
		router.push('/')
	}

	return { isLoading, isLoggedIn, user, mutate, logout }
}

interface IAuth {
	isLoading: boolean
	isLoggedIn: boolean
	user: IAuthUser | null
	mutate: () => Promise<void>
	logout: () => Promise<void>
}

export default useAuth
