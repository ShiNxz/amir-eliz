'use client'

import Link from 'next/link'

import PCNav from './PC'
import MobileNav from './Mobile'
import { Burger } from '@mantine/core'
import { useMobileNav } from './Store'

const Navbar = () => {
	const opened = useMobileNav((state) => state.opened)
	const toggle = useMobileNav((state) => state.toggle)

	return (
		<>
			<MobileNav />
			<div className='border-b border-gray-200/60 fixed w-full backdrop-blur-lg bg-white/20 z-50'>
				<div className='container flex flex-row items-center justify-between z-50 overflow-y-hidden'>
					<Link
						href='/'
						className='text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 font-bold text-xl py-4'
					>
						{process.env.NEXT_PUBLIC_WEBSITE_NAME}
					</Link>
					<PCNav />
					<div className='block md:hidden'>
						<Burger
							aria-label='פתיחת תפריט'
							opened={opened}
							onClick={toggle}
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar
