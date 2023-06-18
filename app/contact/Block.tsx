'use client'

import type { IconType } from 'react-icons/lib'
import { motion } from 'framer-motion'
import { fadeUp } from '@/utils/animations'

const Block = ({ title, text, icon, index }: IProps) => {
	const Icon = icon

	return (
		<motion.div
			className='flex flex-row gap-4 items-center'
			variants={fadeUp}
			viewport={{ once: true }}
			whileInView='in'
			initial='start'
			custom={0 + index * 0.7}
		>
			<div className='bg-white rounded-lg p-3 w-fit h-fit'>
				<Icon
					className='text-blue-600'
					size={26}
				/>
			</div>
			<div className='flex flex-col'>
				<h5 className='text-sm'>{title}</h5>
				<h5 className='text-gray-900 font-semibold text-base'>{text}</h5>
			</div>
		</motion.div>
	)
}

interface IProps {
	title: string
	text: string
	icon: IconType
	index: number
}

export default Block
