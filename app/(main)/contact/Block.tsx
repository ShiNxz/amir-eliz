'use client'

import type { IconType } from 'react-icons/lib'
import { motion } from 'framer-motion'
import { fadeUp } from '@/utils/animations'
import Link from 'next/link'

const Block = ({ title, text, icon, link, index }: IProps) => {
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
				{link ? (
					<Link
						href={link}
						className='text-gray-900 hover:text-gray-700 duration-300 hover:underline font-semibold text-base'
						target='_blank'
					>
						{text}
					</Link>
				) : (
					<h5 className='text-gray-900 font-semibold text-base'>{text}</h5>
				)}
			</div>
		</motion.div>
	)
}

interface IProps {
	title: string
	text: string
	icon: IconType
	index: number
	link?: string
}

export default Block
