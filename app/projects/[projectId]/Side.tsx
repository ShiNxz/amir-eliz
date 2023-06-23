'use client'

import { Button } from '@mantine/core'
import Link from 'next/link'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { fadeRight, fadeUp } from '@/utils/animations'

const ProjectSide = () => {
	return (
		<div className='flex flex-col gap-6 sticky top-10'>
			<Link href='/projects'>
				<motion.span
					className='text-sm hover:text-gray-950 flex flex-row gap-2 items-center'
					variants={fadeRight}
					viewport={{ once: true }}
					whileInView='in'
					initial='start'
					custom={0}
				>
					<HiOutlineArrowNarrowRight />
					חזרה לשאר הפרויקטים
				</motion.span>
			</Link>

			<motion.h4
				className='text-4xl font-bold'
				variants={fadeRight}
				viewport={{ once: true }}
				whileInView='in'
				initial='start'
				custom={1}
			>
				StartApp - פתיחת דף עסקי בחינם
			</motion.h4>
			<motion.p
				variants={fadeRight}
				viewport={{ once: true }}
				whileInView='in'
				initial='start'
				custom={2}
			>
				לורם איפסום דולור סיט אמט, קונסקטטור אדיפיסינג אליט, סדרת תווים קונסקטטור אדיפיסינג אליט, סדרת תווים
				וספרות וספרות וספרות וספרות
			</motion.p>
			<motion.div
				className='flex flex-row gap-2 border-t border-b border-gray-200/90 py-4'
				variants={fadeRight}
				viewport={{ once: true }}
				whileInView='in'
				initial='start'
				custom={3}
			>
				<b>טכנולוגיות:</b>
				Next.js, Prisma, React, Tailwind
			</motion.div>
			<motion.div
				className='flex flex-row gap-2 border-t border-b border-gray-200/90 py-4'
				variants={fadeRight}
				viewport={{ once: true }}
				whileInView='in'
				initial='start'
				custom={3.5}
			>
				<b>טכנולוגיות:</b>
				Next.js, Prisma, React, Tailwind
			</motion.div>
			<motion.div
				className='flex flex-row gap-2 mt-6'
				variants={fadeUp}
				viewport={{ once: true }}
				whileInView='in'
				initial='start'
				custom={4}
			>
				<Button
					color='dark'
					size='md'
					fullWidth
				>
					צפייה באתר
				</Button>
				<Button
					variant='outline'
					color='dark'
					size='md'
					fullWidth
				>
					צפייה בקוד
				</Button>
			</motion.div>
		</div>
	)
}

export default ProjectSide
