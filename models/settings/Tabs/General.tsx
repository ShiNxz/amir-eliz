'use client'

import useAuth from '@/utils/hooks/useAuth'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { handleChangeSetting, SettingInput } from './'
import isEmail from 'validator/lib/isEmail'

const GeneralOptionsTab = () => {
	const { user, mutate } = useAuth()

	const [username, setUsername] = useState({ value: user.username, isLoading: false, error: '' })
	const [debounceUsername] = useDebounce(username.value.trim(), 1000)

	const handleChangeUsername = async () => {
		if (debounceUsername !== user.username) {
			// Validations
			if (debounceUsername.length < 3)
				return setUsername((p) => ({ ...p, error: 'שם המשתמש חייב להכיל לפחות 3 תווים' }))
			if (debounceUsername.length > 20)
				return setUsername((p) => ({ ...p, error: 'שם המשתמש יכול להכיל עד 20 תווים' }))

			setUsername((p) => ({ ...p, isLoading: true }))
			const isChanged = await handleChangeSetting('username', debounceUsername)
			isChanged && (await mutate())
			setUsername((p) => ({ ...p, isLoading: false }))
		}
	}

	const [email, setEmail] = useState({ value: user.email, isLoading: false, error: '' })
	const [debounceEmail] = useDebounce(email.value.trim(), 1000)

	const handleChangeEmail = async () => {
		if (debounceEmail !== user.email) {
			// Validations
			if (!isEmail(debounceEmail)) return setEmail((p) => ({ ...p, error: 'כתובת אימייל אינה תקינה' }))

			setEmail((p) => ({ ...p, isLoading: true }))
			const isChanged = await handleChangeSetting('email', debounceEmail)
			isChanged && (await mutate())
			setEmail((p) => ({ ...p, isLoading: false }))
		}
	}

	useEffect(() => {
		handleChangeUsername()
		handleChangeEmail()
	}, [debounceUsername, debounceEmail])

	return (
		<>
			<h5 className='mb-6'>עדכון פרטי משתמש</h5>
			<div className='flex flex-col gap-8 items-start'>
				<SettingInput
					label='שם משתמש'
					helper={username.error ?? 'שם המשתמש שאיתו תתחברו'}
					isLoading={username.isLoading}
					setValue={(v) => setUsername((p) => ({ ...p, value: v }))}
					value={username.value}
				/>
				<SettingInput
					label='כתובת אימייל'
					helper={email.error ?? 'שם המשתמש שאיתו תתחברו'}
					isLoading={email.isLoading}
					setValue={(v) => setEmail((p) => ({ ...p, value: v }))}
					value={email.value}
				/>
			</div>
		</>
	)
}

export default GeneralOptionsTab
