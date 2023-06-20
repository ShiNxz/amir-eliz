'use client'

import Tag from '@/app/UI/Tag'
import Link from 'next/link'
import { BsBoxArrowUpLeft } from 'react-icons/bs'
import Title from './Title'
import { motion } from 'framer-motion'
import { fadeUp } from '@/utils/animations'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import Button from '@/app/UI/Button'

const Works = () => {
	return (
		<div className='py-32 container'>
			<Title />
			<div className='grid grid-cols-3 gap-8'>
				<Work index={0} />
				<Work index={1} />
				<Work index={2} />
			</div>
			<motion.div
				className='flex justify-center'
				variants={fadeUp}
				viewport={{ once: true }}
				whileInView='in'
				initial='start'
				custom={5}
			>
				<Link
					href='/projects'
					passHref
				>
					<Button
						variant='bordered'
						color='gradient'
						className='from-indigo-500 to-purple-600 text-white mt-12'
					>
						מעבר לשאר הפרויקטים <HiOutlineArrowNarrowLeft className='mr-6' />
					</Button>
				</Link>
			</motion.div>
		</div>
	)
}

export const Work = ({ index }: IWorkProps) => {
	return (
		<Link
			href='/'
			passHref
		>
			<motion.div
				className='shadow-lg hover:shadow-xl duration-200 transition-shadow rounded-lg overflow-hidden border hover:border-gray-300'
				variants={fadeUp}
				viewport={{ once: true }}
				whileInView='in'
				initial='start'
				custom={3 + index * 0.7}
			>
				<img
					className='w-full h-64 object-cover'
					src='https://cdn.dribbble.com/userupload/6338264/file/original-dfc35ba3e9e5dbbc72aa2d69b566a46a.jpg?compress=1&resize=752x564&vertical=center'
					alt='Sunset in the mountains'
				/>
				<div className='p-4 flex flex-col'>
					<div className='font-bold text-xl mb-2'>לורם איפסום אכדדחי</div>
					<p className='text-gray-700 text-base mb-8'>
						לורם איפסום לורם איפסום לורם איפסום לורם איפסום לורם איפסום לורם איפסום לורם איפסום לורם איפסום
						לורם איפסום לורם איפסום לורם איפסום לורם איפסום
					</p>

					<div className='flex flex-row justify-between items-center'>
						<Tag>דף נחיתה</Tag>
						<BsBoxArrowUpLeft className='text-gray-500 hover:text-gray-800 duration-200' />
					</div>
				</div>
			</motion.div>
		</Link>
	)
}

interface IWorkProps {
	index: number
}

export default Works
