import type { IContact } from '@/utils/models/ContactForm'
import useAuth from '@/utils/hooks/useAuth'
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	SelectChangeEvent,
} from '@mui/material'
import React, { useState } from 'react'
import FormStatuses from '@/data/ContactForms/FormStatus'
import Axios from '@/utils/functions/Fetch'
import { toast } from 'react-toastify'
import useUserForms from '../store'

const FormModal = ({ open, state, form, handleClose }: IProps) => {
	return (
		<Dialog
			onClose={handleClose}
			open={open}
		>
			<DialogTitle>{state === 'EDIT' ? 'עריכת סטטוס פנייה' : state === 'WATCH' ? 'פרטי פנייה' : ''}</DialogTitle>
			<DialogContent>
				{form && state === 'WATCH' && <FormContent form={form} />}
				{form && state === 'EDIT' && (
					<FormStatus
						form={form}
						handleClose={handleClose}
					/>
				)}
			</DialogContent>
			<DialogActions>
				<Button
					onClick={handleClose}
					variant='contained'
				>
					סגור
				</Button>
			</DialogActions>
		</Dialog>
	)
}

const FormContent = ({ form }: IContentProps) => {
	return (
		<div className='flex flex-col gap-1 my-8'>
			<span>
				<b>שם מלא:</b> {form.name}
			</span>
			<span>
				<b>כתובת אימייל:</b> {form.email}
			</span>
			<span>
				<b>הודעה:</b> {form.messages[0].message}
			</span>
		</div>
	)
}

const FormStatus = ({ form, handleClose }: IContentProps) => {
	const [isLoading, setIsLoading] = useState(false)
	const mutate = useUserForms((state) => state.mutate)

	const handleChange = async (e: SelectChangeEvent<any>) => {
		if (isLoading) return
		setIsLoading(true)
		try {
			await Axios.put('/api/admin/forms', {
				id: form._id,
				status: e.target.value,
			})
			await mutate()
			toast.success('סטטוס הפנייה עודכן בהצלחה')
		} catch (err) {
			toast.error('אירעה שגיאה בעדכון סטטוס הפנייה')
		}
		handleClose && handleClose()
		setIsLoading(false)
	}

	return (
		<div className='w-72 py-8 '>
			<FormControl
				fullWidth
				disabled={isLoading}
			>
				<InputLabel id='form-status'>סטטוס</InputLabel>
				<Select
					labelId='form-status'
					id='demo-simple-select'
					value={form.status}
					label='Age'
					onChange={handleChange}
				>
					{FormStatuses.map((status, index) => (
						<MenuItem value={index}>{status.label}</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	)
}

interface IContentProps {
	form: IContact
	handleClose?: () => void
}

interface IProps {
	open: boolean
	form: IContact | null
	state: 'EDIT' | 'WATCH' | null
	handleClose: () => void
}

export default FormModal
