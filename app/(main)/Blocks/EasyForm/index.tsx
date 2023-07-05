'use client'

import ServiceTypes from '@/data/ServiceTypes'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeRight, fadeUp } from '@/utils/animations'
import { LuType } from 'react-icons/lu'

const EasyForm = () => {
	return (
		<div className='container py-12 bg-gray-800 text-white border-gray-800 border sm:rounded-lg shadow-xl flex flex-col gap-4 my-8 justify-center items-center'>
			<motion.span
				className='text-3xl font-medium mb-2'
				variants={fadeRight}
				viewport={{ once: true }}
				whileInView='in'
				initial='start'
				custom={0}
			>
				אני מעוניין בפיתוח..
			</motion.span>
			<div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-4 w-full xl:w-2/3'>
				{ServiceTypes.map((service, index) => {
					const ServiceIcon = service.icon

					return (
						<Link
							href={`/contact?service=${service.short}`}
							key={service.short}
						>
							<motion.div
								className='rounded-md p-4 md:p-6 lg:p-8 cursor-pointer bg-gray-100 hover:bg-white text-base sm:text-lg xl:text-xl font-medium flex flex-col items-center justify-center gap-2 w-full text-gray-900'
								variants={fadeUp}
								viewport={{ once: true }}
								whileInView='in'
								initial='start'
								custom={1.5 + index * 0.6}
							>
								<ServiceIcon className='text-xl lg:text-2xl xl:text-3xl' />
								{service.short}
							</motion.div>
						</Link>
					)
				})}
				<Link href='/contact'>
					<motion.div
						className='rounded-md p-4 md:p-6 lg:p-8 cursor-pointer bg-gray-100 hover:bg-white text-base sm:text-lg xl:text-xl font-medium flex flex-col items-center justify-center gap-2 w-full text-gray-900'
						variants={fadeUp}
						viewport={{ once: true }}
						whileInView='in'
						initial='start'
						custom={1.5 + ServiceTypes.length * 0.6}
					>
						<LuType className='text-xl lg:text-2xl xl:text-3xl' />
						אחר
					</motion.div>
				</Link>
			</div>
		</div>
	)
}

export default EasyForm
