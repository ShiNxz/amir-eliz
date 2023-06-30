'use client'

import type { IProject } from '@/utils/models/Project'
import { useEffect } from 'react'
import { create } from 'zustand'
import fetcher from '@/utils/fetcher'
import useSWR, { type KeyedMutator } from 'swr'

const ENDPOINT = '/api/admin/my'

const useProjectsStore = create<IProjectsStore>((set) => ({
	isLoading: true,
	projects: [],
	mutate: async () => {},
	setProjects: (projects) => set({ projects }),
	setMutate: (mutate) => set({ mutate }),
	setIsLoading: (isLoading) => set({ isLoading }),

	passwordModal: {
		open: false,
		project: null,
	},
	setPasswordModal: (passwordModal) => set({ passwordModal }),

	selectedProject: null,
	setSelectedProject: (selectedProject) => set({ selectedProject }),
}))

interface IProjectsStore {
	isLoading: boolean
	projects: IProject[]
	mutate: KeyedMutator<any>
	setProjects: (users: IProject[]) => void
	setMutate: (mutate: KeyedMutator<any>) => void
	setIsLoading: (isLoading: boolean) => void

	passwordModal: {
		open: boolean
		project: IProject | null
	}
	setPasswordModal: (passwordModal: { open: boolean; project: IProject | null }) => void

	selectedProject: IProject | null
	setSelectedProject: (selectedProject: IProject | null) => void
}

export const ProjectsStore = () => {
	const { data, isLoading, mutate } = useSWR(ENDPOINT, fetcher)

	const setProjects = useProjectsStore((state) => state.setProjects)
	const setMutate = useProjectsStore((state) => state.setMutate)
	const setIsLoading = useProjectsStore((state) => state.setIsLoading)

	const setSelectedProject = useProjectsStore((state) => state.setSelectedProject)

	setMutate(mutate)

	const { projects } = data || { projects: [] }

	useEffect(() => {
		setProjects(projects)
		setSelectedProject(projects[0])

		setIsLoading(isLoading)
	}, [projects])

	return <></>
}

export default useProjectsStore
