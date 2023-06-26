import Footer from './UI/Footer'
import Navbar from './UI/Navbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	)
}

export const metadata = {
	title: `${process.env.NEXT_PUBLIC_WEBSITE_NAME} | פאנל ניהול`,
	robots: {
		index: false,
	},
}

export default Layout
