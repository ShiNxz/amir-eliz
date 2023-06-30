'use client'

import { useEffect } from 'react'
import { create } from 'zustand'
import fetcher from '@/utils/fetcher'
import useSWR, { type KeyedMutator } from 'swr'
import { Domain } from '@/utils/models/Domain'

const ENDPOINT = '/api/admin/domains'

const useDomainsStore = create<DomainsStore>((set) => ({
	isLoading: true,
	domains: [],
	mutate: async () => {},
	setDomains: (domains) => set({ domains }),
	setMutate: (mutate) => set({ mutate }),
	setIsLoading: (isLoading) => set({ isLoading }),

	modal: {
		domain: null,
		open: false,
	},
	setModal: (modal) => set({ modal }),
}))

interface DomainsStore {
	isLoading: boolean
	domains: Domain[]
	mutate: KeyedMutator<any>
	setDomains: (users: Domain[]) => void
	setMutate: (mutate: KeyedMutator<any>) => void
	setIsLoading: (isLoading: boolean) => void

	modal: { domain: Domain | null; open: boolean }
	setModal: (modal: { domain: Domain | null; open: boolean }) => void
}

export const DomainsStore = () => {
	const { data, isLoading, mutate } = useSWR(ENDPOINT, fetcher)
	const setDomains = useDomainsStore((state) => state.setDomains)
	const setMutate = useDomainsStore((state) => state.setMutate)
	const setIsLoading = useDomainsStore((state) => state.setIsLoading)

	setMutate(mutate)
	const { domains } = data || { domains: [] }

	useEffect(() => {
		setDomains(domains)
		setIsLoading(isLoading)
	}, [domains])

	return <></>
}

export default useDomainsStore
