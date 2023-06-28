'use client'

import { useMemo } from 'react'
import { useRouter } from 'next/navigation'

// @mui
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'
import { CacheProvider } from '@emotion/react'
import rtlPlugin from 'stylis-plugin-rtl'
import ComponentsOverrides from './ThemeOverrides'

// mantine
import { SpotlightProvider } from '@mantine/spotlight'
import actions from './Actions'
import { FaSearch } from 'react-icons/fa'

const ThemeProvider = ({ children }: IProps) => {
	const themeMode = 'LIGHT'
	const isLight = themeMode === 'LIGHT'

	const router = useRouter()

	const FONT_PRIMARY = 'var(--font-noto)'

	const cacheRtl = createCache({
		key: 'muirtl',
		stylisPlugins: [prefixer, rtlPlugin],
	})

	const themeOptions: IThemeOptions = useMemo(
		() => ({
			direction: 'rtl',
			typography: {
				fontFamily: FONT_PRIMARY,
			},
			shape: { borderRadius: 8 },
		}),
		[isLight]
	)

	const theme = createTheme(themeOptions)
	theme.components = ComponentsOverrides(theme)

	const ACTIONS = actions(router)

	return (
		<CacheProvider value={cacheRtl}>
			<MUIThemeProvider theme={theme}>
				<SpotlightProvider
					actions={ACTIONS}
					searchIcon={<FaSearch size='1.2rem' />}
					searchPlaceholder='חיפוש...'
					shortcut='mod + q'
					nothingFoundMessage='לא נמצאו תוצאות...'
					closeOnActionTrigger
				>
					{children}
				</SpotlightProvider>
			</MUIThemeProvider>
		</CacheProvider>
	)
}

interface IProps {
	children: React.ReactNode
}

interface IThemeOptions {
	direction: 'rtl' | 'ltr'
	typography: any
	shape: any
}

export default ThemeProvider
