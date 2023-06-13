import Footer from './UI/Footer'
import Navbar from './UI/Navbar'
import './globals.scss'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
	title: 'Amir Eliz | אמיר אליז',
	description: '...',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='he'>
			<body className={rubik.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}

export default RootLayout
