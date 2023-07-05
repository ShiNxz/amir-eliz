import CheckLogin from './UI/CheckLogin'
import Content from './UI/Content'
import SideBar from './UI/Sidebar'

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<CheckLogin />
			<div className='min-h-screen w-screen flex md:flex-row flex-row'>
				<SideBar />

				<Content>{children}</Content>
			</div>
		</>
	)
}

interface LayoutProps {
	children: React.ReactNode
}

export const metadata = {
	title: `${process.env.NEXT_PUBLIC_WEBSITE_NAME} | פאנל ניהול`,
}

export default Layout
