import useAuth from '@/utils/hooks/useAuth'
import CheckLogin from './UI/CheckLogin'
import Content from './UI/Content'
import Navbar from './UI/Navbar'
import Sidebar from './UI/Sidebar'

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<CheckLogin />
			<div className='h-screen w-screen flex flex-row'>
				<Sidebar />
				<div
					className='flex flex-col bg-slate-100'
					style={{
						width: '-webkit-fill-available',
					}}
				>
					<Navbar />
					<Content>{children}</Content>
				</div>
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
