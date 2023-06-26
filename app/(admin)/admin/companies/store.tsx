'use client'

import type { ICompany } from '@/models/Company'
import { useEffect } from 'react'
import { create } from 'zustand'
import fetcher from '@/utils/fetcher'
import useSWR, { type KeyedMutator } from 'swr'

const ENDPOINT = '/api/admin/companies'

const useCompaniesStore = create<ICompaniesStore>((set) => ({
	isLoading: true,
	companies: [],
	mutate: async () => {},
	setCompanies: (companies) => set({ companies }),
	setMutate: (mutate) => set({ mutate }),
	setIsLoading: (isLoading) => set({ isLoading }),

	deleteCompany: null,
	setDeleteCompany: (company) => set({ deleteCompany: company }),

	modal: {
		company: null,
		open: false,
	},
	setModal: (modal) => set({ modal }),
}))

interface ICompaniesStore {
	isLoading: boolean
	companies: ICompany[]
	mutate: KeyedMutator<any>
	setCompanies: (users: ICompany[]) => void
	setMutate: (mutate: KeyedMutator<any>) => void
	setIsLoading: (isLoading: boolean) => void

	deleteCompany: ICompany | null
	setDeleteCompany: (company: ICompany | null) => void

	modal: { company: ICompany | null; open: boolean }
	setModal: (modal: { company: ICompany | null; open: boolean }) => void
}

export const CompaniesStore = () => {
	const { data, isLoading, mutate } = useSWR(ENDPOINT, fetcher)
	const setCompanies = useCompaniesStore((state) => state.setCompanies)
	const setMutate = useCompaniesStore((state) => state.setMutate)
	const setIsLoading = useCompaniesStore((state) => state.setIsLoading)

	setMutate(mutate)
	const { companies } = data || { companies: [] }

	useEffect(() => {
		setCompanies(companies)
		setIsLoading(isLoading)
	}, [companies])

	return <></>
}

export default useCompaniesStore
