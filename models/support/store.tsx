'use client'

import type { IContact } from '@/utils/models/ContactForm'
import fetcher from '@/utils/fetcher'
import { create } from 'zustand'
import useSWR, { type KeyedMutator } from 'swr'
import { useEffect } from 'react'

const Endpoint = '/api/admin/support'

const useUserForms = create<IUserForms>((set) => ({
	isLoading: true,
	tickets: [],
	mutate: async () => {},
	setTickets: (tickets) => set({ tickets }),
	setMutate: (mutate) => set({ mutate }),
	setIsLoading: (isLoading) => set({ isLoading }),
}))

interface IUserForms {
	isLoading: boolean
	tickets: IContact[]
	mutate: KeyedMutator<any>
	setTickets: (tickets: IContact[]) => void
	setMutate: (mutate: KeyedMutator<any>) => void
	setIsLoading: (isLoading: boolean) => void
}

export const UserTicketsStore = () => {
	const { data, isLoading, mutate } = useSWR(Endpoint, fetcher)
	const setTickets = useUserForms((state) => state.setTickets)
	const setMutate = useUserForms((state) => state.setMutate)
	const setIsLoading = useUserForms((state) => state.setIsLoading)

	setMutate(mutate)
	const { tickets } = data || { tickets: [] }

	useEffect(() => {
		setTickets(tickets)
		setIsLoading(isLoading)
	}, [tickets])

	return <></>
}

export default useUserForms
