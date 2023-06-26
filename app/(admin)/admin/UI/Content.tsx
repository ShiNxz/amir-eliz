'use client'

import useAuth from '@/utils/hooks/useAuth'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const Content = ({ children }: { children: React.ReactNode }) => {
	const { isLoggedIn, isLoading } = useAuth()
	const path = usePathname()

	return (
		<motion.div
			className='h-full w-full bg-slate-100 p-12'
			style={{ overflowY: 'auto', overflowX: 'hidden' }}
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.25 }}
			key={path}
		>
			{!isLoggedIn || isLoading ? <LoadingState /> : <>{children}</>}
		</motion.div>
	)
}

const LoadingState = () => <>טוען...</>

export default Content
