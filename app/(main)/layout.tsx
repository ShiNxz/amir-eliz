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

export default Layout
