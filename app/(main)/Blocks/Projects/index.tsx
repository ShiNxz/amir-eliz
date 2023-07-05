'use client'

import Link from 'next/link'
import { BsBoxArrowUpLeft } from 'react-icons/bs'
import Title from './Title'
import { motion } from 'framer-motion'
import { fadeUp } from '@/utils/animations'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import Button from '../../UI/Button'
import useHomeStore from '../../Store'
import Tag from '../../UI/Tag'

const Projects = () => {
	const projects = useHomeStore((page) => page.projects)

	return (
		<div className='py-14 md:py-16 lg:py-20 xl:py-32 container'>
			<Title />
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
				{projects.map((project, index) => (
					<Project
						key={project._id}
						index={index}
						{...project}
					/>
				))}
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

export const Project = ({ index, title, description, _id, image, type }: IProjectProps) => {
	return (
		<Link
			href={`/projects/${_id}`}
			passHref
		>
			<motion.div
				className='shadow-lg hover:shadow-xl duration-200 transition-shadow rounded-lg overflow-hidden border hover:border-gray-300 h-full'
				variants={fadeUp}
				viewport={{ once: true }}
				whileInView='in'
				initial='start'
				custom={3 + index * 0.7}
				key={_id}
			>
				<img
					className='w-full h-56 object-cover'
					loading='lazy'
					src={image}
					alt={title}
					title={title}
					width={372}
					height={224}
				/>
				<div className='p-4 flex flex-col h-56 justify-between'>
					<div>
						<div className='font-bold text-xl mb-2'>{title}</div>
						<p className='text-gray-700 text-sm mb-8'>{description}</p>
					</div>

					<div className='flex flex-row justify-between items-center'>
						<Tag>{type}</Tag>
						<BsBoxArrowUpLeft className='text-gray-500 hover:text-gray-800 duration-200' />
					</div>
				</div>
			</motion.div>
		</Link>
	)
}

interface IProjectProps {
	index: number
	_id: string
	title: string
	description: string
	image: string
	type: string
}

export default Projects
