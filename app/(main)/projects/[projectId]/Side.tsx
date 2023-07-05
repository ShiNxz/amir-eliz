'use client'

import { Button } from '@mantine/core'
import Link from 'next/link'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { fadeRight, fadeUp } from '@/utils/animations'

const ProjectSide = ({ title, description, website, repository, techs }: IProject) => {
	return (
		<div className='flex flex-col gap-6 sticky top-10'>
			<Link href='/projects'>
				<motion.span
					className='text-sm hover:text-gray-950 flex flex-row gap-2 items-center'
					variants={fadeRight}
					viewport={{ once: true }}
					whileInView='in'
					initial='start'
					custom={0}
				>
					<HiOutlineArrowNarrowRight />
					חזרה לשאר הפרויקטים
				</motion.span>
			</Link>

			<motion.h4
				className='text-2xl sm:text-3xl lg:text-4xl font-bold'
				variants={fadeRight}
				viewport={{ once: true }}
				whileInView='in'
				initial='start'
				custom={1}
			>
				{title}
			</motion.h4>
			<motion.p
				variants={fadeRight}
				viewport={{ once: true }}
				whileInView='in'
				initial='start'
				custom={2}
			>
				{description}
			</motion.p>
			<motion.div
				className='flex flex-row gap-2 border-t border-b border-gray-200/90 py-4'
				variants={fadeRight}
				viewport={{ once: true }}
				whileInView='in'
				initial='start'
				custom={3}
			>
				<b>טכנולוגיות:</b>
				{techs.join(', ')}
			</motion.div>
			<motion.div
				className='flex flex-row gap-2 mt-6'
				variants={fadeUp}
				viewport={{ once: true }}
				whileInView='in'
				initial='start'
				custom={4}
			>
				{website && (
					<Link
						href={website}
						target='_blank'
						passHref
						className='w-full'
					>
						<Button
							color='dark'
							size='md'
							fullWidth
						>
							מעבר לאתר
						</Button>
					</Link>
				)}
				{repository && (
					<Link
						href={repository}
						target='_blank'
						passHref
						className='w-full'
					>
						<Button
							variant='outline'
							color='dark'
							size='md'
							fullWidth
						>
							צפייה בקוד
						</Button>
					</Link>
				)}
			</motion.div>
		</div>
	)
}

interface IProject {
	title: string
	description: string
	website?: string
	repository?: string
	techs: string[]
}

export default ProjectSide
