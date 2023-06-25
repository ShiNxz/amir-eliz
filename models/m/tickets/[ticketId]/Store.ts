import type { IContact } from '@/utils/models/ContactForm'
import { KeyedMutator } from 'swr'
import { create } from 'zustand'

const useFormStore = create<IFormStore>((set) => ({
	isLoading: true,
	setIsLoading: (isLoading) => set({ isLoading }),
	form: null,
	setForm: (form) => set({ form }),
	mutate: null,
	setMutate: (mutate) => set({ mutate }),
}))

interface IFormStore {
	isLoading: boolean
	setIsLoading: (isLoading: boolean) => void
	form: IContact | null
	setForm: (form: IContact | null) => void
	mutate: KeyedMutator<any> | null
	setMutate: (mutate: KeyedMutator<any>) => void
}

export default useFormStore
