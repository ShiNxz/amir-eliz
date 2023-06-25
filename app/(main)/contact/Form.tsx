'use client'

import { Button, TextInput, Textarea } from '@mantine/core'
import { MdOutlineEmail } from 'react-icons/md'
import SelectItem from './SelectTopic'
import { motion } from 'framer-motion'
import { fadeUp } from '@/utils/animations'
import Title from './Title'

const ContactForm = () => {
	return (
		<>
			<motion.div
				className='rounded-xl bg-white flex flex-col gap-4 items-start p-6'
				viewport={{ once: true }}
				whileInView={{ opacity: 1 }}
				initial={{ opacity: 0 }}
			>
				<Title />

				<motion.div
					className='w-full'
					variants={fadeUp}
					viewport={{ once: true }}
					whileInView='in'
					initial='start'
					custom={1}
				>
					<TextInput
						variant='filled'
						label='שם'
						size='md'
						className='w-full'
					/>
				</motion.div>

				<motion.div
					className='w-full'
					variants={fadeUp}
					viewport={{ once: true }}
					whileInView='in'
					initial='start'
					custom={1.5}
				>
					<TextInput
						icon={<MdOutlineEmail />}
						variant='filled'
						placeholder='כתובת אימייל / מספר טלפון'
						size='md'
						className='w-full'
						label='אמצעי תקשורת'
					/>
				</motion.div>

				<motion.div
					className='w-full'
					variants={fadeUp}
					viewport={{ once: true }}
					whileInView='in'
					initial='start'
					custom={2}
				>
					<SelectItem />
				</motion.div>

				<motion.div
					className='w-full'
					variants={fadeUp}
					viewport={{ once: true }}
					whileInView='in'
					initial='start'
					custom={2.5}
				>
					<Textarea
						variant='filled'
						placeholder='ניתן לכתוב את סיבת הפנייה, במידה ואתם מעוניינים בפיתוח אתר כתבו תיאור מפורט של הפרויקט או השירות שאתם מחפשים. תיאור הפנייה יכול לכלול את סוג הפיתוח הדרוש, רעיונות לשיתוף פעולה או כל פרט אחר שתרצו לשתף איתנו.'
						size='md'
						className='w-full'
						label='הודעה'
						minRows={5}
					/>
				</motion.div>

				<motion.div
					className='w-full'
					variants={fadeUp}
					viewport={{ once: true }}
					whileInView='in'
					initial='start'
					custom={3}
				>
					<Button
						color='dark'
						fullWidth
					>
						שלח פנייה
					</Button>
				</motion.div>
			</motion.div>
		</>
	)
}

export default ContactForm
