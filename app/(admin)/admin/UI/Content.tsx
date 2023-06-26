'use client'

import useAuth from '@/utils/hooks/useAuth'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import ThemeProvider from './Theme'

const Content = ({ children }: { children: React.ReactNode }) => {
	const { isLoggedIn, isLoading } = useAuth()
	const path = usePathname()

	return (
		<ThemeProvider>
			<motion.div
				className='h-full w-full bg-slate-100 p-12'
				// style={{ overflowY: 'auto', overflowX: 'hidden' }}
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

const LoadingState = () => <>טוען...</>

export default Content
