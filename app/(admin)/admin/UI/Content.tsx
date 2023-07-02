'use client'

import useAuth from '@/utils/hooks/useAuth'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import ThemeProvider from './Theme'

const Content = ({ children }: IProps) => {
	const { isLoggedIn, isLoading } = useAuth()
	const path = usePathname()

	return (
		<ThemeProvider>
			<motion.div
				className='h-full w-full bg-slate-100 p-10 md:pt-10 pt-20'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.25 }}
				key={path}
			>
				{!isLoggedIn || isLoading ? <LoadingState /> : <>{children}</>}
			</motion.div>
		</ThemeProvider>
	)
}

interface IProps {
	children: React.ReactNode
}

const LoadingState = () => <>טוען...</>

export default Content
