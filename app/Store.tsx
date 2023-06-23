'use client'

import type { IHomeResponse, IProject } from '@/pages/api/home'
import { create } from 'zustand'
import { useEffect } from 'react'
import axios from 'axios'

const useHomeStore = create<IHomeStore>((set) => ({
	isLoading: true,
	projects: [],
	fetch: async () => {
		set({ isLoading: true })
		try {
			const { data } = (await axios('/api/home')) as { data: IHomeResponse }
			const { projects } = data
			if (projects) set({ projects })

			set({ isLoading: false })
		} catch (error) {
			set({ isLoading: false })
		}
	},
}))

interface IHomeStore {
	isLoading: boolean
	fetch: () => Promise<void>
	projects: IProject[]
}

export const UseStore = () => {
	const fetch = useHomeStore((page) => page.fetch)

	useEffect(() => {
		fetch()
	}, [])

	return <></>
}

export default useHomeStore
