import type { Metadata, Viewport } from 'next'
import { Noto_Sans_Hebrew as NotoHE } from 'next/font/google'
import { description, title } from './../data/SEO'
import keywords from '../data/SEO'
import Providers from './(main)/UI/Providers'

import './styles/globals.scss'

const notoHe = NotoHE({
	subsets: ['hebrew'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-noto',
})

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html
			lang='he'
			dir='rtl'
		>
			<body className={notoHe.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}

export const metadata: Metadata = {
	title,
	description,
	keywords,
	alternates: {
		canonical: `https://${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}`,
	},
	icons: [
		{
			rel: 'icon',
			url: `https://${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/favicon.ico`,
		},
	],
	openGraph: {
		title,
		description,
		type: 'website',
		url: `https://${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}`,
		images: [
			{
				url: `https://${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/logo.png`,
				width: 800,
				height: 600,
			},
		],
	},
	robots: {
		index: true,
	},
	metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}`),
}

export const viewport: Viewport = {
	themeColor: '#33ACFF',
	colorScheme: 'light',
}

export default RootLayout
