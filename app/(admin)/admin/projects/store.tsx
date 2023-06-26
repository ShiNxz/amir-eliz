'use client'

import type { IProject } from '@/models/Project'
import { useEffect } from 'react'
import { create } from 'zustand'
import fetcher from '@/utils/fetcher'
import useSWR, { type KeyedMutator } from 'swr'

const ENDPOINT = '/api/admin/projects'

const useProjectsStore = create<IProjectsStore>((set) => ({
	isLoading: true,
	projects: [],
	mutate: async () => {},
	setProjects: (projects) => set({ projects }),
	setMutate: (mutate) => set({ mutate }),
	setIsLoading: (isLoading) => set({ isLoading }),

	deleteProject: null,
	setDeleteProject: (project) => set({ deleteProject: project }),

	modal: {
		project: null,
		open: false,
	},
	setModal: (modal) => set({ modal }),
}))

interface IProjectsStore {
	isLoading: boolean
	projects: IProject[]
	mutate: KeyedMutator<any>
	setProjects: (users: IProject[]) => void
	setMutate: (mutate: KeyedMutator<any>) => void
	setIsLoading: (isLoading: boolean) => void

	deleteProject: IProject | null
	setDeleteProject: (project: IProject | null) => void

	modal: { project: IProject | null; open: boolean }
	setModal: (modal: { project: IProject | null; open: boolean }) => void
}

export const ProjectsStore = () => {
	const { data, isLoading, mutate } = useSWR(ENDPOINT, fetcher)

	const setProjects = useProjectsStore((state) => state.setProjects)
	const setMutate = useProjectsStore((state) => state.setMutate)
	const setIsLoading = useProjectsStore((state) => state.setIsLoading)

	setMutate(mutate)
	const { projects } = data || { projects: [] }

	useEffect(() => {
		setProjects(projects)
		setIsLoading(isLoading)
	}, [projects])

	return <></>
}

export default useProjectsStore
