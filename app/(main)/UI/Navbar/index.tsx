'use client'

import Link from 'next/link'

import PCNav from './PC'
import MobileNav from './Mobile'

const Navbar = () => {
	return (
		<div className='border-b border-gray-200/60 fixed w-full backdrop-blur-md bg-white/20 z-50'>
			<div className='container flex flex-row items-center justify-between z-50 overflow-y-hidden'>
				<Link
					href='/'
					className='text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 font-bold text-xl py-4'
				>
					{process.env.NEXT_PUBLIC_WEBSITE_NAME}
				</Link>
				<PCNav />
				<MobileNav />
			</div>
		</div>
	)
}

export default Navbar
