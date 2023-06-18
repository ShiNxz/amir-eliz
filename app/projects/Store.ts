'use client'

import { create } from 'zustand'

interface IFiltersState {
	filters: string[]
	addFilter: (filter: string) => void
	removeFilter: (filter: string) => void
}

const useFilters = create<IFiltersState>((set) => ({
	filters: [],
	addFilter: (filter) => set((state) => ({ filters: [...state.filters, filter] })),
	removeFilter: (filter) => set((state) => ({ filters: state.filters.filter((f) => f !== filter) })),
}))

export const NameToKey = (name: string) => name.toLowerCase().replaceAll(/ /g, '_')

export default useFilters
