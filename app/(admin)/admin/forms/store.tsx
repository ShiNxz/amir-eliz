'use client'

import type { ContactForm } from '@/utils/models/Contact'
import { useEffect } from 'react'
import { create } from 'zustand'
import fetcher from '@/utils/fetcher'
import useSWR, { type KeyedMutator } from 'swr'

const ENDPOINT = '/api/admin/forms'

const useContactFormsStore = create<IContactFormsStore>((set) => ({
	isLoading: true,
	forms: [],
	mutate: async () => {},
	setContactForms: (forms) => set({ forms }),
	setMutate: (mutate) => set({ mutate }),
	setIsLoading: (isLoading) => set({ isLoading }),
}))

interface IContactFormsStore {
	isLoading: boolean
	forms: ContactForm[]
	mutate: KeyedMutator<any>
	setContactForms: (users: ContactForm[]) => void
	setMutate: (mutate: KeyedMutator<any>) => void
	setIsLoading: (isLoading: boolean) => void
}

export const ContactFormsStore = () => {
	const { data, isLoading, mutate } = useSWR(ENDPOINT, fetcher)

	const setContactForms = useContactFormsStore((state) => state.setContactForms)
	const setMutate = useContactFormsStore((state) => state.setMutate)
	const setIsLoading = useContactFormsStore((state) => state.setIsLoading)

	setMutate(mutate)

	const { forms } = data || { forms: [] }

	useEffect(() => {
		setContactForms(forms)
		setIsLoading(isLoading)
	}, [forms])

	return <></>
}

export default useContactFormsStore
