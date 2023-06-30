'use client'

import axios from 'axios'
import { motion } from 'framer-motion'
import { Button, Select, TextInput, Textarea } from '@mantine/core'
import { fadeUp } from '@/utils/animations'
import SelectItem, { data } from './SelectItem'
import Title from './Title'
import contactSchema from '@/utils/schemas/contact'
import { useEffect, useState } from 'react'
import { useForm, zodResolver } from '@mantine/form'
import notification, { updateNotification } from '@/utils/functions/notification'
import { useSearchParams } from 'next/navigation'

const ContactForm = () => {
	const [isLoading, setIsLoading] = useState(false)

	const searchParams = useSearchParams()
	const service = searchParams!.get('service')

	const canSendAnotherForm = () => {
		if (typeof window === 'undefined') return true
		if (!localStorage) return true

		const isSentForm = localStorage.getItem('isSentForm')
		if (!isSentForm) return true

		const time = new Date().getTime()
		const timeDiff = time - parseInt(isSentForm)

		// 7 day
		if (timeDiff > 1000 * 60 * 60 * 24 * 7) return true

		return false
	}

	const form = useForm({
		initialValues: {
			name: '',
			identifier: '',
			topic: '',
			message: '',
		},
		validate: zodResolver(contactSchema),
	})

	useEffect(() => {
		console.log(service)
		if (service) {
			form.setFieldValue('topic', data.find(({ label }) => label.includes(service))?.value || '')
		}
	}, [])

	const handleSubmit = async () => {
		if (isLoading) return

		setIsLoading(true)

		notification('contactForm', 'צור קשר', 'שולח את הפנייה, אנא המתן..')

		try {
			await axios({
				method: 'POST',
				url: '/api/contact',
				data: form.values,
			})

			updateNotification('contactForm', 'צור קשר', 'הפנייה נשלחה בהצלחה!')

			localStorage.setItem('isSentForm', new Date().getTime().toString())
		} catch (e) {
			console.log(e)

			updateNotification(
				'contactForm',
				'צור קשר',
				(e as any).response?.data?.message || 'חלה שגיאה בשליחת הפנייה, אנא נסה שוב.',
				'error'
			)
		}

		form.reset()

		await new Promise((resolve) => setTimeout(resolve, 1000))
		setIsLoading(false)
	}

	return (
		<>
			<motion.form
				className='rounded-xl bg-white flex flex-col gap-4 items-start p-6'
				viewport={{ once: true }}
				whileInView={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				onSubmit={form.onSubmit(handleSubmit)}
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
						data-autofocus
						variant='filled'
						label='שם'
						size='md'
						disabled={isLoading}
						{...form.getInputProps('name')}
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
						variant='filled'
						placeholder='כתובת אימייל / מספר טלפון'
						size='md'
						className='w-full'
						label='אמצעי תקשורת'
						disabled={isLoading}
						{...form.getInputProps('identifier')}
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
					<Select
						label='נושא הפנייה'
						placeholder='לדוגמה- פיתוח אתר אינטרנט'
						itemComponent={SelectItem}
						data={data}
						searchable
						maxDropdownHeight={400}
						nothingFound='לא נמצאו תוצאות'
						filter={(value, item) =>
							item.label?.toLowerCase().includes(value.toLowerCase().trim()) ||
							item.description.toLowerCase().includes(value.toLowerCase().trim())
						}
						variant='filled'
						className='w-full'
						size='md'
						disabled={isLoading}
						{...form.getInputProps('topic')}
					/>
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
						placeholder='יש לכתוב את סיבת הפנייה, במידה ואתם מעוניינים בפיתוח אתר כתבו תיאור מפורט של הפרויקט או השירות שאתם מחפשים. תיאור הפנייה יכול לכלול את סוג הפיתוח הדרוש, רעיונות לשיתוף פעולה או כל פרט אחר שתרצו לשתף איתנו.'
						size='md'
						className='w-full'
						label='הודעה'
						minRows={5}
						disabled={isLoading}
						{...form.getInputProps('message')}
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
						type='submit'
						loading={isLoading}
						disabled={isLoading || !canSendAnotherForm()}
					>
						{isLoading ? 'אנא המתן..' : canSendAnotherForm() ? 'אישור ושליחה' : 'לא ניתן לשלוח פנייה חדשה'}
					</Button>
				</motion.div>
			</motion.form>
		</>
	)
}

export default ContactForm
