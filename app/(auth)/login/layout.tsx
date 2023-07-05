import CheckLogin from './CheckLogin'

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<CheckLogin />
			<div className='grid lg:grid-cols-2 h-screen w-full'>
				<div className='col-span-1 flex flex-col justify-center items-center px-8 lg:px-0 lg:w-1/2 mx-auto'>{children}</div>
				<div className='col-span-1 bg-gray-200 hidden lg:flex flex-col justify-center items-center'>text</div>
			</div>
		</>
	)
}

interface LayoutProps {
	children: React.ReactNode
}

export const metadata = {
	title: `${process.env.NEXT_PUBLIC_WEBSITE_NAME} | התחברות`,
}

export default Layout
