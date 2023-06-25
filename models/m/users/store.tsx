'use client'

import type { IUser } from '@/utils/models/User'
import fetcher from '@/utils/fetcher'
import { create } from 'zustand'
import useSWR, { type KeyedMutator } from 'swr'
import { useEffect } from 'react'

const Endpoint = '/api/admin/m/users'

const useUsersStore = create<IUsersStore>((set) => ({
	isLoading: true,
	users: [],
	mutate: async () => {},
	setUsers: (users) => set({ users }),
	setMutate: (mutate) => set({ mutate }),
	setIsLoading: (isLoading) => set({ isLoading }),
}))

interface IUsersStore {
	isLoading: boolean
	users: IUser[]
	mutate: KeyedMutator<any>
	setUsers: (users: IUser[]) => void
	setMutate: (mutate: KeyedMutator<any>) => void
	setIsLoading: (isLoading: boolean) => void
}

export const UserUsersStore = () => {
	const { data, isLoading, mutate } = useSWR(Endpoint, fetcher)
	const setUsers = useUsersStore((state) => state.setUsers)
	const setMutate = useUsersStore((state) => state.setMutate)
	const setIsLoading = useUsersStore((state) => state.setIsLoading)

	setMutate(mutate)
	const { users } = data || { users: [] }

	useEffect(() => {
		setUsers(users)
		setIsLoading(isLoading)
	}, [users])

	return <></>
}

export default useUsersStore
