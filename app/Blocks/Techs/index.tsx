'use client'

import Link from 'next/link'

import nextjs from '@/public/assets/techs/nextjs.svg'
import react from '@/public/assets/techs/react.svg'
import node from '@/public/assets/techs/nodejs.svg'
import mysql from '@/public/assets/techs/mysql.svg'
import mongodb from '@/public/assets/techs/mongodb.svg'
import php from '@/public/assets/techs/php.svg'
import aws from '@/public/assets/techs/aws.svg'
import docker from '@/public/assets/techs/docker.svg'
import tailwind from '@/public/assets/techs/tailwind.svg'
import sass from '@/public/assets/techs/sass.svg'
import typescript from '@/public/assets/techs/typescript.svg'
import prisma from '@/public/assets/techs/prisma.svg'

import { motion } from 'framer-motion'
import { fadeUp } from '@/utils/animations'

const Techs = () => {
	return (
		<div className='flex flex-col items-center p-8 bg-gray-900 shadow-lg'>
			{/* <span className='text-lg text-gray-100 tracking-wide mb-8'>שימוש וידע במעל ל10 שפות תכנות וטכנולוגיות</span> */}
			<div className='flex flex-row justify-between items-center container'>
				{TECHS.map((t, index) => (
					<Link
						href={t.link}
						key={t.name}
					>
						<motion.img
							src={t.img.src || t.img}
							alt={t.name}
							width={36}
							height={36}
							variants={fadeUp}
							viewport={{ once: true }}
							whileInView='in'
							initial='start'
							custom={index * 0.5}
						/>
					</Link>
				))}
			</div>
		</div>
	)
}

const TECHS = [
	{
		name: 'React',
		img: nextjs.src,
		link: '#',
	},
	{
		name: 'Next.js',
		img: react.src,
		link: '#',
	},
	{
		name: 'Next.js',
		img: node,
		link: '#',
	},
	{
		name: 'MySQL',
		img: mysql,
		link: '#',
	},
	{
		name: 'MongoDB',
		img: mongodb,
		link: '#',
	},
	{
		name: 'Php',
		img: php,
		link: '#',
	},
	{
		name: 'Aws',
		img: aws,
		link: '#',
	},
	{
		name: 'Docker',
		img: docker,
		link: '#',
	},
	{
		name: 'tailwind',
		img: tailwind,
		link: '#',
	},
	{
		name: 'sass',
		img: sass,
		link: '#',
	},
	{
		name: 'typescript',
		img: typescript,
		link: '#',
	},
	{
		name: 'prisma',
		img: prisma,
		link: '#',
	},
]

export default Techs
