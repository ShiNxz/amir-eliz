'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence, useTransform } from 'framer-motion'
import { create } from 'zustand'
import { fadeUp } from '@/utils/animations'

interface IStyleState {
	style: number
	setStyle: (newStyle: number) => void
}

export const useStyle = create<IStyleState>((set) => ({
	style: 0,
	setStyle: (newStyle) => set({ style: newStyle }),
}))

const Title = () => {
	const { style, setStyle } = useStyle((s) => s)

	useEffect(() => {
		const interval = setInterval(() => {
			setStyle(style + 1 === variants.length ? 0 : style + 1)
		}, 6000)

		return () => clearInterval(interval)
	}, [setStyle, style])

	return (
		<>
			<motion.h1
				className='text-8xl font-extrabold text-gray-800 text-center'
				viewport={{ once: true }}
				variants={fadeUp}
				whileInView='in'
				initial='start'
				custom={0}
			>
				עיצוב ופיתוח{' '}
				<AnimatePresence
					mode='wait'
					key={style}
				>
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 1.5 } }}
						exit={{ opacity: 0, transition: { duration: 0.4 } }}
						key={style}
						className={`text-transparent bg-clip-text bg-gradient-to-r ${variants[style].style}`}
					>
						{variants[style].name}
					</motion.span>
				</AnimatePresence>
			</motion.h1>
		</>
	)
}

export const variants = [
	{
		name: 'דפי נחיתה',
		style: 'from-blue-500 to-sky-500',
		shadow: 'shadow-sky-500/20',
	},
	{
		name: 'אתרי תדמית',
		style: 'from-orange-500 to-red-500',
		shadow: 'shadow-red-500/20',
	},
	{
		name: 'אתרי אינטרנט',
		style: 'from-pink-500 to-rose-500',
		shadow: 'shadow-rose-500/20',
	},
	{
		name: 'אתרי סטארטאפ',
		style: 'from-purple-500 to-indigo-500',
		shadow: 'shadow-indigo-500/20',
	},
]

export default Title
