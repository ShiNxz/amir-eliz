'use client'

import { createRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { create } from 'zustand'
import { fadeUp } from '@/utils/animations'
import { TypeAnimation } from 'react-type-animation'

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

	console.log('style', style)

	const currentStyle = variants[style].style
	const currentName = variants[style].name

	const nextStyle = (currentIndex: number) => {
		setStyle(currentIndex + 1 === variants.length ? 0 : currentIndex + 1)
	}

	let sequence: Sequence = []

	type Sequence = Array<SequenceElement>
	type SequenceElement = string | number | ((element: HTMLElement | null) => void | Promise<void>)

	variants.map((variant, index) => {
		sequence = [
			...sequence,
			variant.name,
			3800,
			() => {
				nextStyle(index)
			},
		]
	})

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
				<span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentStyle}`}>
					<TypeAnimation
						sequence={sequence}
						speed={74}
						repeat={Infinity}
						title='פיתוח אתרים'
					/>
				</span>
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
		name: 'אתרי Startup',
		style: 'from-purple-500 to-indigo-500',
		shadow: 'shadow-indigo-500/20',
	},
]

export default Title
