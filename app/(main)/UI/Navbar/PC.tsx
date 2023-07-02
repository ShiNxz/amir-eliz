import { motion } from 'framer-motion'
import Button from '../Button'
import Routes from './Routes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const PCNav = () => {
	const path = usePathname()

	return (
		<>
			<div className='hidden md:flex flex-row gap-12 h-full'>
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
				className='hidden md:block'
			>
				<Button
					variant='bordered'
					color='flat'
					size='sm'
				>
					פאנל לקוחות
				</Button>
			</Link>
		</>
	)
}

export default PCNav
