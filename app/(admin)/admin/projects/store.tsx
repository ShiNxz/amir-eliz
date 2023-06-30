'use client'

import type { IProject } from '@/utils/models/Project'
import { useEffect } from 'react'
import { create } from 'zustand'
import fetcher from '@/utils/fetcher'
import useSWR, { type KeyedMutator } from 'swr'
import { Domain } from '@/utils/models/Domain'

const ENDPOINT = '/api/admin/projects'

const useProjectsStore = create<IProjectsStore>((set) => ({
	isLoading: true,
	projects: [],
	mutate: async () => {},
	setProjects: (projects) => set({ projects }),
	setMutate: (mutate) => set({ mutate }),
	setIsLoading: (isLoading) => set({ isLoading }),

	modal: {
		project: null,
		open: false,
	},
	setModal: (modal) => set({ modal }),

	modalContent: {
		project: null,
		open: false,
	},
	setModalContent: (modalContent) => set({ modalContent }),

	domains: [],
	setDomains: (domains) => set({ domains }),

	unusedDomains: [],
	setUnusedDomains: (unusedDomains) => set({ unusedDomains }),
}))

interface IProjectsStore {
	isLoading: boolean
	projects: IProject[]
	mutate: KeyedMutator<any>
	setProjects: (users: IProject[]) => void
	setMutate: (mutate: KeyedMutator<any>) => void
	setIsLoading: (isLoading: boolean) => void

	modal: { project: IProject | null; open: boolean }
	setModal: (modal: { project: IProject | null; open: boolean }) => void

	modalContent: { project: IProject | null; open: boolean }
	setModalContent: (modalContent: { project: IProject | null; open: boolean }) => void

	domains: Domain[]
	setDomains: (domains: Domain[]) => void

	unusedDomains: Domain[]
	setUnusedDomains: (unusedDomains: Domain[]) => void
}

export const ProjectsStore = () => {
	const { data, isLoading, mutate } = useSWR(ENDPOINT, fetcher)

	const setProjects = useProjectsStore((state) => state.setProjects)
	const setMutate = useProjectsStore((state) => state.setMutate)
	const setIsLoading = useProjectsStore((state) => state.setIsLoading)

	const setDomains = useProjectsStore((state) => state.setDomains)
	const setUnusedDomains = useProjectsStore((state) => state.setUnusedDomains)

	setMutate(mutate)

	const { projects, domains, unusedDomains } = data || { projects: [], domains: [], unusedDomains: [] }

	useEffect(() => {
		setProjects(projects)
		setDomains(domains)
		setUnusedDomains(unusedDomains)
		setIsLoading(isLoading)
	}, [projects])

	return <></>
}

export default useProjectsStore
