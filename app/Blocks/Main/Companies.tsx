import Link from 'next/link'
import hamelaket from '@/public/companies/hamelaket.webp'
import eserv from '@/public/companies/eserv.jpg'
import voxbyte from '@/public/companies/voxbyte.svg'
import buildisrael from '@/public/companies/buildisrael.png'
import next from '@/public/companies/next.png'
import startapp from '@/public/companies/startapp.png'

const Companies = () => {
	return (
		<div className='py-20 flex flex-col gap-8 items-center'>
			<Link
				href='#'
				className='text-lg text-gray-400 tracking-[0.3em]'
			>
				חברות וארגונים
			</Link>
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
]

export default Companies
