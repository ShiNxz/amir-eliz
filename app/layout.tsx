import Footer from './UI/Footer'
import Navbar from './UI/Navbar'
import { Noto_Sans_Hebrew as NotoHE } from 'next/font/google'
import Providers from './UI/Providers'
import './globals.scss'
import keywords from '../data/SEO'
import { description, title } from './../data/SEO'

const notoHe = NotoHE({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800', '900'] })

export const metadata = {
	title,
	description,
	keywords,
	viewport: 'width=device-width, initial-scale=1',
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

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html
			lang='he'
			dir='rtl'
		>
			<body className={notoHe.className}>
				<Providers>
					<Navbar />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	)
}

export default RootLayout
