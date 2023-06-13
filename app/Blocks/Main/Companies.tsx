'use client'

import Flicking from '@egjs/react-flicking'
import '@egjs/react-flicking/dist/flicking.css'
import { AutoPlay } from '@egjs/flicking-plugins'
import logo from '@/public/logo.png'
import hamelaket from '@/public/companies/hamelaket.webp'
import eserv from '@/public/companies/eserv.jpg'
import voxbyte from '@/public/companies/voxbyte.svg'
import Link from 'next/link'

const Companies = () => {
	return (
		<div className='py-20 flex flex-col gap-8 items-center'>
			<Link href='#' className='text-lg font-medium text-slate-500 tracking-widest'>חברות וארגונים</Link>
			<div className='flex flex-row gap-12 items-center'>
				{comps.map(({ name, logo }) => (
					<img
						src={logo.src}
						alt={name}
						className='h-12 w-auto'
						key={name}
						draggable={false}
					/>
				))}
			</div>
		</div>
	)
}

const Companies2 = ({ direction, duration }: { direction: 'NEXT' | 'PREV'; duration: number }) => {
	const plugins = [new AutoPlay({ duration, direction, stopOnHover: false })]

	return (
		<div
			className='flex flex-col justify-between items-center w-full'
			dir='ltr'
		>
			<Flicking
				circular={true}
				plugins={plugins}
			>
				{Array(50)
					.fill({ name: 'Google', logo: logo })
					.map(({ name, logo }) => (
						<img
							src={logo.src}
							alt={name}
							className='mx-8 h-16 brightness-0 hover:brightness-100 invert-[0.8] hover:invert-0'
							key={name}
							draggable={false}
						/>
					))}
			</Flicking>
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
]

export default Companies
