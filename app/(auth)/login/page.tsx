'use client'

import { Button, Input } from '@mantine/core'
import { FaPhone } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { z } from 'zod'
import validator from 'validator'
import ReactCodeInput from 'react-verification-code-input'
import axios from 'axios'
import { AnimatePresence, motion } from 'framer-motion'
import { fadeUp } from '@/utils/animations'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import useAuth from '@/utils/hooks/useAuth'
import notification, { updateNotification } from '@/utils/functions/notification'

const LoginPage = () => {
	const router = useRouter()
	const { mutate } = useAuth()
	const [isLoading, setIsLoading] = useState(false)
	const [phone, setPhone] = useState('')
	const [stage, setStage] = useState<'phone' | 'code' | 'done'>('phone')
	const [error, setError] = useState('')

	const isPhoneValid = phoneSchema.safeParse(phone).success

	useEffect(() => {
		error && setError('')
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [phone])

	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		notification('phone', 'התחברות', 'אנא המתן...')

		// Validate phone
		if (!isPhoneValid) setError('מספר הטלפון שהוזן אינו תקין')

		setIsLoading(true)

		try {
			await axios.post('/api/auth/start', {
				phone,
			})

			updateNotification('phone', 'אישור', 'קוד אימות נשלח למספר ' + phone)

			setStage('code')
		} catch (err) {
			console.error(err)

			updateNotification(
				'phone',
				'שגיאה!',
				(err as any).response.data.message || 'חלה שגיאה במהלך ההתחברות לאתר, אנא נסה שנית מאוחר יותר',
				'error'
			)
		}

		setIsLoading(false)
	}

	const handleVerify = async (value: string) => {
		setIsLoading(true)

		notification('login', 'התחברות', 'אנא המתן...')

		try {
			const { data } = (await axios.post('/api/auth/verify', {
				phone,
				code: value,
			})) as { data: { token: string } }

			setStage('done')
			updateNotification('login', 'אימות', 'התחברת בהצלחה!')

			Cookies.set('token', data.token, { expires: 30 })
			await mutate()

			setTimeout(() => {
				router.push('/admin')
			}, 3000)
		} catch (err) {
			console.error(err)
			console.error((err as any).response.data)

			updateNotification(
				'login',
				'שגיאה!',
				(err as any).response.data.message || 'חלה שגיאה במהלך ההתחברות לאתר, אנא נסה שנית מאוחר יותר',
				'error'
			)
		}

		setIsLoading(false)
	}

	return (
		<>
			<motion.h1
				className='text-4xl font-bold text-gray-800 mb-4'
				variants={fadeUp}
				viewport={{ once: true }}
				animate='in'
				initial='start'
				exit='exit'
				custom={0}
			>
				ברוכים הבאים! 🤞
			</motion.h1>
			<motion.h5
				className='text-gray-600 mb-10'
				variants={fadeUp}
				viewport={{ once: true }}
				animate='in'
				initial='start'
				exit='exit'
				custom={1}
			>
				מכאן ניתן לצפות באתרים ובפרויקטים שבבעלותיכם, לנהל את האתרים שלכם ולצפות בסטטיסטיקות ונתונים עדכניים
			</motion.h5>
			<AnimatePresence
				key={stage}
				mode='wait'
			>
				{stage === 'phone' && (
					<form
						onSubmit={handleLogin}
						className='w-full'
					>
						<motion.div
							variants={fadeUp}
							viewport={{ once: true }}
							animate='in'
							initial='start'
							exit='exit'
							custom={2}
							className='w-full'
						>
							<Input
								icon={<FaPhone />}
								placeholder='מספר טלפון'
								size='md'
								variant='filled'
								className='w-full'
								disabled={isLoading}
								value={phone}
								onChange={(e) => setPhone(e.currentTarget.value)}
								error={error}
								type='tel'
								id='phone'
							/>
						</motion.div>
						<motion.div
							variants={fadeUp}
							viewport={{ once: true }}
							animate='in'
							initial='start'
							exit='exit'
							custom={3}
							className='w-full'
						>
							<Button
								className='mt-4'
								fullWidth
								color='dark'
								loading={isLoading}
								type='submit'
								disabled={!isPhoneValid}
							>
								{isLoading ? 'אנא המתן...' : 'התחברות'}
							</Button>
						</motion.div>
					</form>
				)}
				{stage === 'code' && (
					<motion.div
						className='text-center flex flex-col gap-1'
						variants={fadeUp}
						viewport={{ once: true }}
						animate='in'
						initial='start'
						exit='exit'
						custom={0}
					>
						<span>
							קוד אימות נשלח למספר <b>{phone}</b>
						</span>
						<span>רשמו את הקוד שקיבלתם ב SMS</span>
						<ReactCodeInput
							autoFocus
							onComplete={handleVerify}
							loading={isLoading}
							fields={6}
						/>
					</motion.div>
				)}
				{stage === 'done' && (
					<motion.h4
						className='text-2xl font-medium'
						variants={fadeUp}
						viewport={{ once: true }}
						animate='in'
						initial='start'
						exit='exit'
						custom={0}
					>
						התחברת בהצלחה! אנא המתן...
					</motion.h4>
				)}
			</AnimatePresence>
		</>
	)
}

const phoneSchema = z.string().min(10).max(10).refine(validator.isMobilePhone)

export default LoginPage
