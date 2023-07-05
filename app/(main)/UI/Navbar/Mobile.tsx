import { Burger } from '@mantine/core'
import { useMobileNav } from './Store'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import Routes from './Routes'

const MobileNav = () => {
	const opened = useMobileNav((state) => state.opened)
	const toggle = useMobileNav((state) => state.toggle)

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0, x: 10 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.2 }}
				exit={{ opacity: 0, x: -10 }}
				className={`backdrop-blur-md bg-white/60 fixed h-full inset flex-col w-full z-[100] container ${
					opened ? 'flex' : 'hidden'
				}`}
				key={opened.toString()}
			>
				<div className='flex flex-row items-center justify-between z-50 overflow-y-hidden border-b border-gray-200/60'>
					<Link
						href='/'
						className='text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 font-bold text-xl py-4'
					>
						{process.env.NEXT_PUBLIC_WEBSITE_NAME}
					</Link>
					<div className='block md:hidden'>
						<Burger
							aria-label='סגירת תפריט'
							opened={opened}
							onClick={toggle}
						/>
					</div>
				</div>
				<div className='mt-20'>
					{Routes.map((route) => (
						<Link
							href={route.route}
							key={route.name}
							className='block py-4 font-semibold text-xl'
							onClick={toggle}
						>
							{route.name}
						</Link>
					))}
					<Link
						href='/admin'
						className='block py-4 font-semibold text-xl'
						onClick={toggle}
					>
						פאנל לקוחות
					</Link>
				</div>
			</motion.div>
		</AnimatePresence>
	)
}

export default MobileNav
