'use client'

import type { IconType } from 'react-icons/lib'
import { Networks } from './Contacts'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp } from '@/utils/animations'

const Social = () => {
	return (
		<div className='flex flex-col gap-4'>
			<motion.h4
				className='text-gray-900'
				variants={fadeUp}
				viewport={{ once: true }}
				whileInView='in'
				initial='start'
				custom={2}
			>
				רשתות חברתיות
			</motion.h4>
			<div className='flex flex-row gap-4'>
				{Networks.map((network, index) => (
					<Block
						key={network.link}
						index={index}
						{...network}
					/>
				))}
			</div>
		</div>
	)
}

const Block = ({ link, icon, index }: IProps) => {
	const Icon = icon

	return (
		<Link href={link}>
			<motion.div
				className='bg-blue-100 rounded-full p-4 w-fit h-fit'
				variants={fadeUp}
				viewport={{ once: true }}
				whileInView='in'
				initial='start'
				custom={3 + index * 0.7}
			>
				<Icon
					className='text-blue-800'
					size={24}
				/>
			</motion.div>
		</Link>
	)
}

interface IProps {
	link: string
	icon: IconType
	index: number
}

export default Social
