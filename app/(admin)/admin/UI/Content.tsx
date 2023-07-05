'use client'

import { usePathname } from 'next/navigation'
import { ScrollArea } from '@mantine/core'
import { motion } from 'framer-motion'
import useAuth from '@/utils/hooks/useAuth'
import ThemeProvider from './Theme'

const Content = ({ children }: IProps) => {
	const { isLoggedIn, isLoading } = useAuth()
	const path = usePathname()

	return (
		<ThemeProvider>
			<motion.div
				className='w-full'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.25 }}
				key={path}
			>
				{!isLoggedIn || isLoading ? (
					<LoadingState />
				) : (
					<ScrollArea
						className='bg-slate-100 p-2 sm:p-4 md:p-10 md:pt-10 pt-20'
						h='100vh'
					>
						{children}
					</ScrollArea>
				)}
			</motion.div>
		</ThemeProvider>
	)
}

interface IProps {
	children: React.ReactNode
}

const LoadingState = () => <>טוען...</>

export default Content
