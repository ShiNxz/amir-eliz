import CheckLogin from './CheckLogin'

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<CheckLogin />
			<div className='grid lg:grid-cols-10 h-screen w-full'>
				<div className='col-span-6 flex flex-col justify-center items-center px-8 lg:px-0 lg:w-1/2 mx-auto'>
					{children}
				</div>
				<div className='col-span-4 hidden lg:block p-4'>
					<div
						className='flex flex-col bg-gradient-to-tr py-20 from-purple-400 to-indigo-500 w-full h-full rounded-xl bg-cover bg-center'
						style={{
							backgroundImage:
								'url("https://cdn.dribbble.com/users/1277985/screenshots/5966047/media/003be8d3e5868b9aa4573d65bdf2e2af.png")',
						}}
					/>
				</div>
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
