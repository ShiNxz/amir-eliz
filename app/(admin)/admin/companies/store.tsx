'use client'

import type { ICompany } from '@/utils/models/Company'
import type { IProject } from '@/utils/models/Project'
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

	modal: {
		company: null,
		open: false,
	},
	setModal: (modal) => set({ modal }),

	projectModal: {
		company: null,
		open: false,
	},
	setProjectModal: (modal) => set({ projectModal: modal }),
	unusedProjects: [],
	setUnusedProjects: (unusedProjects) => set({ unusedProjects }),
}))

interface ICompaniesStore {
	isLoading: boolean
	companies: ICompany[]
	mutate: KeyedMutator<any>
	setCompanies: (users: ICompany[]) => void
	setMutate: (mutate: KeyedMutator<any>) => void
	setIsLoading: (isLoading: boolean) => void

	modal: { company: ICompany | null; open: boolean }
	setModal: (modal: { company: ICompany | null; open: boolean }) => void

	projectModal: { company: ICompany | null; open: boolean }
	setProjectModal: (modal: { company: ICompany | null; open: boolean }) => void

	unusedProjects: IProject[]
	setUnusedProjects: (unusedProjects: IProject[]) => void
}

export const CompaniesStore = () => {
	const { data, isLoading, mutate } = useSWR(ENDPOINT, fetcher)
	const setCompanies = useCompaniesStore((state) => state.setCompanies)
	const setUnusedProjects = useCompaniesStore((state) => state.setUnusedProjects)
	const setMutate = useCompaniesStore((state) => state.setMutate)
	const setIsLoading = useCompaniesStore((state) => state.setIsLoading)

	setMutate(mutate)
	const { companies, projects } = data || { companies: [], projects: [] }

	useEffect(() => {
		setCompanies(companies)
		setUnusedProjects(projects)
		setIsLoading(isLoading)
	}, [companies])

	return <></>
}

export default useCompaniesStore
