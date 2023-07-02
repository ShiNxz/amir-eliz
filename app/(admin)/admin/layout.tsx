import CheckLogin from './UI/CheckLogin'
import Content from './UI/Content'
import SideBar from './UI/Sidebar'

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<CheckLogin />
			<div className='h-screen w-screen flex md:flex-row flex-row'>
				<SideBar />

				<div
					className='flex flex-col bg-slate-100'
					style={{
						width: '-webkit-fill-available',
					}}
				>
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
