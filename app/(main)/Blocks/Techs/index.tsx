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
import socketio from '@/public/assets/techs/socketio.svg'
import redis from '@/public/assets/techs/redis.svg'

import { motion } from 'framer-motion'
import { fadeUp } from '@/utils/animations'

const Techs = () => {
	return (
		<div className='flex flex-col items-center p-8 bg-gray-900 shadow-lg'>
			<div className='flex flex-row lg:justify-between flex-wrap gap-4 items-center container justify-center'>
				{TECHS.map((t, index) => (
					<Link
						href={t.link}
						key={t.name}
						target='_blank'
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
		img: react.src,
		link: 'https://react.dev',
	},
	{
		name: 'Next.js',
		img: nextjs.src,
		link: 'https://nextjs.org',
	},
	{
		name: 'Node.js',
		img: node,
		link: 'https://nodejs.org/en',
	},
	{
		name: 'MySQL',
		img: mysql,
		link: 'https://www.mysql.com',
	},
	{
		name: 'MongoDB',
		img: mongodb,
		link: 'https://www.mongodb.com',
	},
	{
		name: 'Php',
		img: php,
		link: 'https://www.php.net',
	},
	{
		name: 'Aws',
		img: aws,
		link: 'https://aws.amazon.com',
	},
	{
		name: 'Docker',
		img: docker,
		link: 'https://www.docker.com',
	},
	{
		name: 'Tailwind',
		img: tailwind,
		link: 'https://tailwindcss.com',
	},
	{
		name: 'Sass / Scss',
		img: sass,
		link: 'https://sass-lang.com',
	},
	{
		name: 'TypeScript',
		img: typescript,
		link: 'https://www.typescriptlang.org',
	},
	{
		name: 'Prisma',
		img: prisma,
		link: 'https://www.prisma.io',
	},
	{
		name: 'Socket.IO',
		img: socketio,
		link: 'https://socket.io',
	},
	{
		name: 'Redis',
		img: redis,
		link: 'https://redis.io',
	},
]

export default Techs
