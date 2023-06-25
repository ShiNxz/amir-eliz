'use client'

import type { IProjectsResponse, IProject } from '@/pages/api/projects'
import axios from 'axios'
import { create } from 'zustand'
import { useEffect } from 'react'

interface IProjectsStore {
	isLoading: boolean
	projects: IProject[]
	types: string[]
	techs: string[]
	fetch: () => Promise<void>

	filters: string[]
	addFilter: (filter: string) => void
	removeFilter: (filter: string) => void
}

const useProjectsStore = create<IProjectsStore>((set) => ({
	isLoading: true,
	projects: [],
	types: [],
	techs: [],
	fetch: async () => {
		set({ isLoading: true })
		try {
			const { data } = (await axios('/api/projects')) as { data: IProjectsResponse }
			const { projects, types, techs } = data
			if (projects) set({ projects })
			if (types) set({ types })
			if (techs) set({ techs })

			set({ isLoading: false })
		} catch (error) {
			set({ isLoading: false })
		}
	},
	filters: [],
	addFilter: (filter) => set((state) => ({ filters: [...state.filters, filter] })),
	removeFilter: (filter) => set((state) => ({ filters: state.filters.filter((f) => f !== filter) })),
}))

export const NameToKey = (name: string) => name.toLowerCase().replaceAll(/ /g, '_')

export const UseStore = () => {
	const fetch = useProjectsStore((page) => page.fetch)

	useEffect(() => {
		fetch()
	}, [])

	return <></>
}

export default useProjectsStore
