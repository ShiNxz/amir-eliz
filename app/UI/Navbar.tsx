'use client'

import logo from '@/public/logo.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import Button from './Button'

const Navbar = () => {
	const path = usePathname()

	return (
		<div className='border-b border-slate-200'>
			<div className='container flex flex-row items-center p-4 justify-between'>
				<img
					src={logo.src}
					alt='logo'
					className='h-10'
				/>
				<div className='flex flex-row gap-12'>
					{Routes.map(({ name, route }) => (
						<Link
							href={route}
							className={`${
								route === path ? 'text-black' : 'text-slate-600'
							} font-medium duration-200 relative`}
							key={name}
						>
							{route === path && (
								<motion.span
									layoutId='underline'
									className='absolute right-1/2 translate-x-1/2 top-full block h-0.5 w-3 bg-slate-950'
								/>
							)}
							{name}
						</Link>
					))}
				</div>
				<Button
					variant='bordered'
					color='flat'
					size='sm'
				>
					צור קשר
				</Button>
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
		route: '/portfolio',
	},
	{
		name: 'צור קשר',
		route: '/contact',
	},
]

export default Navbar
