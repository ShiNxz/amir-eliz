'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { create } from 'zustand'
import { fadeUp } from '@/utils/animations'
import Typed from 'typed.js'

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
	const el = useRef(null)

	const currentStyle = variants[style].style

	const nextStyle = (currentIndex: number) => setStyle((currentIndex + 1) % variants.length)

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: variants.map((v) => v.name), // Strings to display
			startDelay: 300,
			backDelay: 5000,
			smartBackspace: true,
			loop: true,
			typeSpeed: 15,
			backSpeed: 10,
			onStringTyped(arrayPos) {
				setTimeout(() => {
					nextStyle(arrayPos)
				}, 5115)
			},
		})

		return () => {
			typed.destroy()
		}
	}, [])

	return (
		<>
			<motion.h1
				className='text-8xl font-black text-gray-800 text-center flex flex-row gap-6'
				viewport={{ once: true }}
				variants={fadeUp}
				whileInView='in'
				initial='start'
				custom={0}
			>
				עיצוב ופיתוח
				<div className={`text-transparent bg-clip-text bg-gradient-to-r ${currentStyle}`}>
					<span ref={el} />
				</div>
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
		name: 'חנויות אינטרנט',
		style: 'from-green-500 to-lime-500',
		shadow: 'shadow-green-500//20',
	},
	{
		name: 'אפליקציות',
		style: 'from-yellow-500 to-orange-500',
		shadow: 'shadow-orange-400//20',
	},
	{
		name: 'אתרי אינטרנט',
		style: 'from-pink-500 to-rose-500',
		shadow: 'shadow-rose-500/20',
	},
	{
		name: 'מערכות ניהול',
		style: 'from-lime-500 to-green-500',
		shadow: 'shadow-lime-500/20',
	},
	{
		name: 'אתרי סטארטאפ',
		style: 'from-purple-500 to-indigo-500',
		shadow: 'shadow-indigo-500/20',
	},
]

export default Title
