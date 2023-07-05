'use client'

import type { IconType } from 'react-icons/lib'
import Particle from './Particle'
import LottiePlayer from 'lottie-react'
import lottieFile from '@/public/assets/lottie2.json'
import { motion } from 'framer-motion'
import { fadeDown, fadeLeft, fadeRight, fadeUp } from '@/utils/animations'
import FeaturesArray from '@/data/Features'

const Features = () => {
	return (
		<div
			className='border-t border-gray-200 bg-white py-14 md:py-16 lg:py-20 xl:py-24 relative overflow-y-clip'
			id='main'
		>
			<Particle
				style='bg-blue-500'
				variant='LEFT'
			/>
			<Particle
				style='bg-cyan-500'
				variant='RIGHT'
			/>
			<div className='flex flex-col gap-2 container text-center'>
				<motion.h2
					className='text-4xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-950 z-20'
					variants={fadeDown}
					viewport={{ once: true }}
					whileInView='in'
					initial='start'
					custom={0}
				>
					הפיתוח המושלם עבורכם
				</motion.h2>
				<motion.div
					className='bg-gradient-to-r from-blue-500 to-cyan-500 h-0.5 lg:h-1 w-16 mx-auto'
					variants={fadeUp}
					viewport={{ once: true }}
					whileInView='in'
					initial='start'
					custom={0.5}
				/>
				<motion.h6
					className='text-md lg:text-lg text-gray-800 px-4 lg:px-0 lg:w-4/5 mx-auto mb-8'
					variants={fadeUp}
					viewport={{ once: true }}
					whileInView='in'
					initial='start'
					custom={1}
				>
					בין אם אתם צריכים אתר עסקי, בלוג אישי, חנות אינטרנט או כל סוג אחר של אתר, אני מספק פיתוח איכותי
					ומותאם לצרכים הייחודיים שלכם
				</motion.h6>
				<div className='grid lg:grid-cols-2 gap-10 items-center'>
					<motion.div
						variants={fadeLeft}
						viewport={{ once: true }}
						whileInView='in'
						initial='start'
						custom={3}
						className='hidden lg:block'
					>
						<LottiePlayer
							animationData={lottieFile}
							loop={true}
						/>
					</motion.div>
					<div className='flex flex-col'>
						{FeaturesArray.map((feature, index) => (
							<Feature
								index={0}
								key={feature.title}
								{...feature}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

const Feature = ({ index, icon, title, text }: IFeature) => {
	const FeatureIcon = icon

	return (
		<motion.div
			className='flex flex-col gap-2 p-6 lg:text-start text-center items-center lg:items-start'
			variants={fadeRight}
			viewport={{ once: true }}
			whileInView='in'
			initial='start'
			custom={4 + index * 0.7}
		>
			<div className='bg-blue-100 rounded-lg p-2 w-fit h-fit'>
				<FeatureIcon
					className='text-blue-800'
					size={20}
				/>
			</div>
			<h3 className='text-2xl lg:text-3xl font-semibold text-gray-950'>{title}</h3>
			<p className='text-gray-700 text-sm lg:text-base'>{text}</p>
		</motion.div>
	)
}

interface IFeature {
	index: number
	icon: IconType
	title: string
	text: string
}

export default Features
