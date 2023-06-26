'use client'

import { useMemo } from 'react'

// @mui
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'
import { CacheProvider } from '@emotion/react'
import rtlPlugin from 'stylis-plugin-rtl'
import ComponentsOverrides from './ThemeOverrides'

const ThemeProvider = ({ children }: IProps) => {
	const themeMode = 'LIGHT'
	const isLight = themeMode === 'LIGHT'

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

	return (
		<CacheProvider value={cacheRtl}>
			<MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
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
