'use client'

import Axios from '@/utils/functions/Fetch'
import { Button, TextField } from '@mui/material'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { TiMessages } from 'react-icons/ti'
import { toast } from 'react-toastify'
import useFormStore from './Store'

const NewMessage = () => {
	const params = useParams()

	const mutate = useFormStore((state) => state.mutate)

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!params) return
		if (isLoading) return
		if (!message) return toast.error('יש לרשום הודעה')

		setIsLoading(true)

		try {
			await Axios.post(`/api/admin/support/${params.ticketId}`, { message })
			toast.success('ההודעה נשלחה בהצלחה')
			setMessage('')
			mutate && mutate()
		} catch (err) {
			toast.error('אירעה שגיאה בעת שליחת ההודעה')
		}

		setIsLoading(false)
	}

	const [message, setMessage] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	return (
		<form
			onSubmit={handleSubmit}
			className='gap-4 rounded-lg text-slate-900 relative bg-white border border-slate-300/70 flex flex-row items-center h-fit p-6'
		>
			<TextField
				id='new-message'
				label='הודעה חדשה'
				variant='outlined'
				onChange={(e) => setMessage(e.target.value)}
				value={message}
				disabled={isLoading}
				InputProps={<TiMessages />}
				size='small'
				fullWidth
			/>

			<Button
				disabled={isLoading || !message}
				type='submit'
				color='primary'
				variant='contained'
				className='!min-w-fit'
			>
				{isLoading ? 'אנא המתן...' : 'שליחת הודעה'}
			</Button>
		</form>
	)
}

export default NewMessage
