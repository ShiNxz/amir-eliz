'use client'

import { FiSettings } from 'react-icons/fi'
import Particle from './Particle'
import LottiePlayer from 'lottie-react'
import lottieFile from '@/public/assets/lottie2.json'

const Features = () => {
	return (
		<div className='border-t border-gray-200 bg-white py-28 relative overflow-y-clip'>
			<Particle
				style='bg-blue-500'
				variant='LEFT'
			/>
			<Particle
				style='bg-cyan-500'
				variant='RIGHT'
			/>
			<div className='flex flex-col gap-2 container text-center'>
				<h2 className='text-6xl font-bold text-gray-950'>לורם איפסום</h2>
				<div className='bg-gradient-to-r from-blue-500 to-cyan-500 h-1 w-16 mx-auto' />
				<h6 className='text-lg text-gray-800 w-2/3 mx-auto mb-8'>
					לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי
					מנורך. הועניב היושבב שערש שמחויט
				</h6>
				<div className='grid grid-cols-2 gap-10'>
					<LottiePlayer
						animationData={lottieFile}
						loop={true}
					/>
					<div className='flex flex-col'>
						<Feature />
						<Feature />
						<Feature />
					</div>
				</div>
			</div>
		</div>
	)
}

const Feature = () => {
	return (
		<div className='flex flex-col gap-3 p-6 text-start'>
			<div className='bg-blue-100 rounded-lg p-2 w-fit h-fit'>
				<FiSettings
					className='text-blue-800'
					size={24}
				/>
			</div>
			<h3 className='text-3xl font-semibold text-gray-950'>כותרת כותרת</h3>
			<p className='text-gray-700'>
				טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט לורם איפסום דולור
				סיט אמט, קונסקטורר אדיפיסינג אלית להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך.
			</p>
		</div>
	)
}

export default Features
