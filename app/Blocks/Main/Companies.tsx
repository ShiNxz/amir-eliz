import { motion } from 'framer-motion'
import { fadeUp } from '@/utils/animations'

import hamelaket from '@/public/companies/hamelaket.png'
import eserv from '@/public/companies/eserv.jpg'
import voxbyte from '@/public/companies/voxbyte.svg'
import buildisrael from '@/public/companies/buildisrael.png'
import next from '@/public/companies/next.png'
import startapp from '@/public/companies/startapp.png'
import seeu from '@/public/companies/seeu.png'
import Link from 'next/link'

const Companies = () => {
	return (
		<div className='flex flex-col gap-8 items-center'>
			<motion.span
				className='text-md text-gray-500 tracking-title'
				variants={fadeUp}
				viewport={{ once: true }}
				whileInView='in'
				initial='start'
				custom={2}
			>
				חברות וארגונים
			</motion.span>
			<div className='flex flex-row gap-12 items-center'>
				{comps.map(({ name, logo, href }, index) => (
					<Link
						key={name}
						href={href}
					>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<motion.img
							src={logo.src}
							alt={name}
							className='max-w-[100px] max-h-10 h-auto'
							draggable={false}
							variants={fadeUp}
							viewport={{ once: true }}
							whileInView='in'
							initial='start'
							custom={2 + index * 0.5}
							whileHover={{ scale: 1.1, transition: { duration: 0.25, delay: 0 } }}
						/>
					</Link>
				))}
			</div>
		</div>
	)
}

const comps = [
	{
		name: '...',
		logo: hamelaket,
		href: '',
	},
	{
		name: '...',
		logo: voxbyte,
		href: '',
	},
	{
		name: '...',
		logo: eserv,
		href: '',
	},
	{
		name: '...',
		logo: buildisrael,
		href: '',
	},
	{
		name: '...',
		logo: next,
		href: '',
	},
	{
		name: '...',
		logo: startapp,
		href: '',
	},
	{
		name: '...',
		logo: seeu,
		href: '',
	},
]

export default Companies
