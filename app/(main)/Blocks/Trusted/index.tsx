'use client'

import Particle from './Particle'
import { forwardRef } from 'react'
import Flicking from '@egjs/react-flicking'
import '@egjs/react-flicking/dist/flicking.css'
import { AutoPlay } from '@egjs/flicking-plugins'
import TrustedArray from '@/data/Trusted'
import { useMediaQuery } from '@mantine/hooks'

const TrustedSection = () => {
	const plugins = [new AutoPlay({ duration: 4000, direction: 'PREV', stopOnHover: false })]
	const matches = useMediaQuery('(min-width: 1024px)');

	return (
		<div className='py-16 md:py-20 lg:py-26 xl:py-32 bg-white relative overflow-clip'>
			<Particle
				style='bg-indigo-500'
				variant='LEFT'
			/>
			<Particle
				style='bg-pink-500'
				variant='RIGHT'
			/>
			<div
				className='container'
				dir='ltr'
			>
				<Flicking
					circular={true}
					panelsPerView={matches ? 2 : 1}
					plugins={plugins}
					align='prev'
				>
					{TrustedArray.map((trusted) => (
						<Trusted
							{...trusted}
							key={trusted.name}
						/>
					))}
				</Flicking>
			</div>
		</div>
	)
}

// eslint-disable-next-line react/display-name
const Trusted = forwardRef(
	({ name, company, text, avatar }: { name: string; company: string; text: string; avatar: string }, ref: any) => {
		return (
			<div
				className='rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-white/60 duration-200 p-8 mx-4 flex flex-col bg-white/40 z-50 shadow-2xl shadow-black/10'
				ref={ref}
				dir='rtl'
			>
				<span className='text-xl font-medium text-gray-950 pb-8 border-b border-gray-300'>
					{`"`}
					{text}
					{`"`}
				</span>
				<div className='flex flex-row gap-2 pt-8'>
					<img
						src={avatar}
						alt={name}
						title={name}
						className='rounded-full w-12 h-12'
						width={48}
						height={48}
					/>
					<div className='flex flex-col'>
						<span className='text-gray-950 text-lg font-bold'>{name}</span>
						<span className='text-gray-700 text-base font-normal'>{company}</span>
					</div>
				</div>
			</div>
		)
	}
)

export default TrustedSection
