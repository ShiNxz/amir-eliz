'use client'

import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import { toast } from 'react-toastify'
import { handleChangeSetting } from '.'

const PasswordOptionsTab = () => {
	const [currentPassword, setCurrentPassword] = useState('')
	const [newPassword, setNewPassword] = useState('')
	const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('')

	const [isLoading, setIsLoading] = useState(false)

	const handleChangePassword = async () => {
		if (isLoading) return
		if (!currentPassword || !newPassword || !newPasswordConfirmation) return toast.error('אנא מלא את כל השדות')
		if (newPassword !== newPasswordConfirmation) {
			return toast.error('הסיסמאות אינן תואמות')
		}

		// validations
		if (newPassword.length < 6) return toast.error('הסיסמה חייבת להיות באורך של 6 תווים לפחות')
		if (newPassword.length > 20) return toast.error('הסיסמה יכולה להיות באורך של עד 20 תווים')

		setIsLoading(true)

		await handleChangeSetting('password', {
			currentPassword,
			newPassword,
		})

		setCurrentPassword('')
		setNewPassword('')
		setNewPasswordConfirmation('')
		setIsLoading(false)
	}

	return (
		<>
			<h5 className='mb-6'>עדכון סיסמא</h5>
			<div className='flex flex-col gap-6 items-start'>
				<TextField
					label='סיסמה נוכחית'
					variant='outlined'
					id='current-password'
					value={currentPassword}
					onChange={(e) => setCurrentPassword(e.target.value)}
					type='password'
					autoComplete='off'
					color='primary'
				/>
				<TextField
					label='סיסמה חדשה'
					variant='outlined'
					id='new-password'
					value={newPassword}
					onChange={(e) => setNewPassword(e.target.value)}
					type='password'
					autoComplete='off'
					color='primary'
				/>
				<TextField
					label='סיסמה חדשה - אימות'
					variant='outlined'
					id='new-password-confirmation'
					value={newPasswordConfirmation}
					onChange={(e) => setNewPasswordConfirmation(e.target.value)}
					type='password'
					autoComplete='off'
					color='primary'
				/>

				<Button
					variant='contained'
					onClick={handleChangePassword}
				>
					עדכון סיסמה
				</Button>
			</div>
		</>
	)
}

export default PasswordOptionsTab
