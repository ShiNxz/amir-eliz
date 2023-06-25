'use client'

import type { IContact } from '@/utils/models/ContactForm'
import fetcher from '@/utils/fetcher'
import { create } from 'zustand'
import useSWR, { type KeyedMutator } from 'swr'
import { useEffect } from 'react'

const Endpoint = '/api/admin/forms'

const useUserForms = create<IUserForms>((set) => ({
	isLoading: true,
	forms: [],
	mutate: async () => {},
	setForms: (forms) => set({ forms }),
	setMutate: (mutate) => set({ mutate }),
	setIsLoading: (isLoading) => set({ isLoading }),
}))

interface IUserForms {
	isLoading: boolean
	forms: IContact[]
	mutate: KeyedMutator<any>
	setForms: (forms: IContact[]) => void
	setMutate: (mutate: KeyedMutator<any>) => void
	setIsLoading: (isLoading: boolean) => void
}

export const UserFormsStore = () => {
	const { data, isLoading, mutate } = useSWR(Endpoint, fetcher)
	const setForms = useUserForms((state) => state.setForms)
	const setMutate = useUserForms((state) => state.setMutate)
	const setIsLoading = useUserForms((state) => state.setIsLoading)

	setMutate(mutate)
	const { userForms } = data || { userForms: [] }

	useEffect(() => {
		setForms(userForms)
		setIsLoading(isLoading)
	}, [userForms])

	return <></>
}

export default useUserForms
