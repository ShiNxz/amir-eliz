import Footer from './UI/Footer'
import Navbar from './UI/Navbar'
import { Noto_Sans_Hebrew } from 'next/font/google'
import Providers from './UI/Providers'
import './globals.scss'

const noto = Noto_Sans_Hebrew({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800', '900'] })

export const metadata = {
	title: 'Amir Eliz | אמיר אליז',
	description: '...',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html
			lang='he'
			dir='rtl'
		>
			<body className={noto.className}>
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
