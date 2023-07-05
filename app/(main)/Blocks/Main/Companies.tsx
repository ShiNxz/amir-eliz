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
			<div className='flex flex-row gap-12 items-center flex-wrap justify-center'>
				{comps.map(({ name, logo, href }, index) => (
					<Link
						key={name}
						href={href}
						target='_blank'
					>
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
							height={logo.height}
						/>
					</Link>
				))}
			</div>
		</div>
	)
}

const comps = [
	{
		name: 'המלקט',
		logo: hamelaket,
		href: 'https://hamelaket.co.il',
		width: 130,
		height: 37,
	},
	{
		name: 'VoxByte',
		logo: voxbyte,
		href: 'voxbyte.io',
		width: 100,
		height: 33,
	},
	{
		name: 'ESERV',
		logo: eserv,
		href: 'https://www.eserv.co.il',
		width: 100,
		height: 37,
	},
	{
		name: 'BuildIsrael',
		logo: buildisrael,
		href: 'https://www.buildisrael.net',
		width: 40,
		height: 40,
	},
	{
		name: 'Next-il',
		logo: next,
		href: 'https://next-il.co.il',
		width: 100,
		height: 24,
	},
	{
		name: 'StartApp',
		logo: startapp,
		href: 'https://start-app.co.il',
		width: 40,
		height: 40,
	},
	{
		name: 'SeeU',
		logo: seeu,
		href: 'https://hamelaket.co.il',
		width: 100,
		height: 29,
	},
]

export default Companies
