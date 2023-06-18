'use client'

import logo from '@/public/logo.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import Button from './Button'

const Navbar = () => {
	const path = usePathname()

	return (
		<div className='border-b border-gray-200 fixed w-full backdrop-blur-xl bg-white/20 z-50'>
			<div className='container flex flex-row items-center justify-between z-50 overflow-y-hidden'>
				<Link href='/'>
					<img
						src={logo.src}
						alt='logo'
						className='h-14'
					/>
				</Link>
				<div className='flex flex-row gap-12 h-full'>
					{Routes.map(({ name, route }) => (
						<Link
							href={route}
							className={`${
								route === path ? 'text-black' : 'text-gray-600'
							} font-semibold duration-200 relative h-full`}
							key={name}
						>
							{route === path && (
								<motion.span
									layoutId='navbar'
									className='absolute right-1/2 translate-x-1/2 -bottom-1/2 !top-[120%] block h-0.5 w-3 bg-gray-950'
								/>
							)}
							{name}
						</Link>
					))}
				</div>
				<Link
					href='/admin'
					passHref
				>
					<Button
						variant='bordered'
						color='flat'
						size='sm'
					>
						פאנל לקוחות
					</Button>
				</Link>
			</div>
		</div>
	)
}

const Routes = [
	{
		name: 'אודות',
		route: '/',
	},
	{
		name: 'תיק עבודות',
		route: '/projects',
	},
	{
		name: 'צור קשר',
		route: '/contact',
	},
]

export default Navbar
