import { motion } from 'framer-motion'
import { fadeUp } from '@/utils/animations'

import hamelaket from '@/public/companies/hamelaket.png'
import eserv from '@/public/companies/eserv.jpg'
import voxbyte from '@/public/companies/voxbyte.svg'
import buildisrael from '@/public/companies/buildisrael.png'
import next from '@/public/companies/next.png'
import startapp from '@/public/companies/startapp.png'
import seeu from '@/public/companies/seeu.png'

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
				{comps.map(({ name, logo }, index) => (
					// eslint-disable-next-line @next/next/no-img-element
					<motion.img
						src={logo.src}
						alt={name}
						className='max-w-[100px] max-h-10 h-auto'
						key={name}
						draggable={false}
						variants={fadeUp}
						viewport={{ once: true }}
						whileInView='in'
						initial='start'
						custom={2 + index * 0.5}
					/>
				))}
			</div>
		</div>
	)
}

const comps = [
	{
		name: '...',
		logo: hamelaket,
	},
	{
		name: '...',
		logo: voxbyte,
	},
	{
		name: '...',
		logo: eserv,
	},
	{
		name: '...',
		logo: buildisrael,
	},
	{
		name: '...',
		logo: next,
	},
	{
		name: '...',
		logo: startapp,
	},
	{
		name: '...',
		logo: seeu,
	},
]

export default Companies
