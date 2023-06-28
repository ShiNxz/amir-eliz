import Link from 'next/link'
import Pages from './Pages'
import { ADMIN_PAGES, PAGES } from './Routes'

const Sidebar = () => {
	return (
		<div className='flex flex-col border-l bg-white border-slate-300/70 h-full w-80'>
			<div className='border-b border-slate-300/70 h-16 min-h-[4rem] flex flex-row items-center p-4'>
				<Link
					href='/'
					className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 font-bold text-xl py-4'
				>
					{process.env.NEXT_PUBLIC_WEBSITE_NAME}
				</Link>
			</div>
			<div className='flex flex-col justify-between h-full'>
				<div>
					<Pages
						title='תפריט ראשי'
						pages={PAGES}
					/>
					<Pages
						title='תפריט ניהול'
						pages={ADMIN_PAGES}
					/>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
