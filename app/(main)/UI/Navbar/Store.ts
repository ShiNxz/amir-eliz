'use client'

import { create } from 'zustand'

interface MobileNav {
	opened: boolean
	toggle: () => void
}

export const useMobileNav = create<MobileNav>((set) => ({
	opened: false,
	toggle: () => set((state) => ({ opened: !state.opened })),
}))
