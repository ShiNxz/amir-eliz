import { create } from 'zustand'

const useAccountSettingsStore = create<IAccountSettingsStore>((set) => ({
	tab: 0,
	setTab: (tab) => set({ tab }),
}))

interface IAccountSettingsStore {
	tab: number
	setTab: (tab: number) => void
}

export default useAccountSettingsStore
