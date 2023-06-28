'use client'

import { ReactNode } from 'react'
import { MantineProvider, createEmotionCache } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { ModalsProvider } from '@mantine/modals'
import stylisRTLPlugin from 'stylis-plugin-rtl'

interface IProviders {
	children: ReactNode
}

const rtlCache = createEmotionCache({
	key: 'mantine-rtl',
	stylisPlugins: [stylisRTLPlugin],
})

const Providers = ({ children }: IProviders) => {
	return (
		<MantineProvider
			emotionCache={rtlCache}
			theme={{ dir: 'rtl', colorScheme: 'light' }}
		>
			<Notifications />
			<ModalsProvider>{children}</ModalsProvider>
		</MantineProvider>
	)
}

export default Providers
