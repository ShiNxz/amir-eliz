'use client'

import Particle from './Particle'
import { forwardRef } from 'react'
import Flicking from '@egjs/react-flicking'
import '@egjs/react-flicking/dist/flicking.css'
import { AutoPlay } from '@egjs/flicking-plugins'

const TrustedSection = () => {
	const plugins = [new AutoPlay({ duration: 4000, direction: 'PREV', stopOnHover: false })]

	return (
		<div className='py-32 bg-white relative overflow-clip'>
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
					panelsPerView={2}
					plugins={plugins}
					align='prev'
				>
					<Trusted
						name='דניאל כהן'
						avatar='https://vercel.com/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1669994321%2Fpreviews%2Favatar-tatiana.png&w=48&q=100&dpl=dpl_4JKyZX6rFqQS41tJicUhPzDX6P2c'
						text='לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.'
					/>
					<Trusted
						name='דניאל כהן'
						avatar='https://vercel.com/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1669994321%2Fpreviews%2Favatar-tatiana.png&w=48&q=100&dpl=dpl_4JKyZX6rFqQS41tJicUhPzDX6P2c'
						text='לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.'
					/>
					<Trusted
						name='דניאל כהן'
						avatar='https://vercel.com/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1669994321%2Fpreviews%2Favatar-tatiana.png&w=48&q=100&dpl=dpl_4JKyZX6rFqQS41tJicUhPzDX6P2c'
						text='לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.'
					/>
				</Flicking>
			</div>
		</div>
	)
}

// eslint-disable-next-line react/display-name
const Trusted = forwardRef(({ name, text, avatar }: { name: string; text: string; avatar: string }, ref: any) => {
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
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={avatar}
					alt={name}
					className='rounded-full w-12 h-12'
				/>
				<div className='flex flex-col'>
					<span className='text-gray-950 text-lg font-bold'>{name}</span>
					<span className='text-gray-700 text-base font-normal'>מנכ{`"`}ל</span>
				</div>
			</div>
		</div>
	)
})

export default TrustedSection
