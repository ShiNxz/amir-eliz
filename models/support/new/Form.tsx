'use client'

import type { AxiosError } from 'axios'
import { Alert, Button, Collapse, InputAdornment, TextField } from '@mui/material'
import { useReducer, useState } from 'react'
import Reducer, { initialState } from './Reducer'
import { ACTIONS } from './Reducer/types'
import { MdPerson } from 'react-icons/md'
import Axios from '@/utils/functions/Fetch'
import TopicDropdown from 'app/(main)/contact/Form/Inputs/TopicDropdown'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

const NewTicketForm = () => {
	const [state, dispatch] = useReducer(Reducer, initialState)
	const [alert, setAlert] = useState<Alert>({ show: false, style: 'error', message: '' })

	const router = useRouter()

	const setLoading = (payload: boolean) => dispatch({ type: ACTIONS.SET_LOADING, payload })

	// Set generic values
	const setValue = (key: string, value: string) => dispatch({ type: ACTIONS.SET_VALUE, payload: { key, value } })
	const setTopic = (value: string | null) => dispatch({ type: ACTIONS.SET_TOPIC, payload: value })

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (state.message.status != 1)
			return setAlert({
				show: true,
				style: 'error',
				message: 'יש לרשום את ההודעה',
			})

		setLoading(true)

		const fetchData = {
			topic: state.topic,
			message: state.message.value,
		}

		try {
			const { data } = await Axios.post('/api/admin/support', fetchData)
			toast('הפנייה נפתחה בהצלחה!')
			router.push('/admin/support/' + data.form)
		} catch (error) {
			setAlert({
				show: true,
				style: 'error',
				message: ((error as AxiosError)?.response?.data as any).error,
			})
		}

		setLoading(false)
	}

	const RegisterInputs = [
		{
			id: 'topic',
			title: 'נושא',
			type: 'dropdown',
			icon: {
				startAdornment: (
					<InputAdornment position='start'>
						<MdPerson />
					</InputAdornment>
				),
			},
			onClick: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
				setValue('topic', e.target.value),
		},
		{
			id: 'message',
			title: 'הודעה',
			type: 'text',
			onClick: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
				setValue('message', e.target.value),
		},
	]

	return (
		<div className='grid grid-cols-7 gap-6'>
			<div className='flex flex-col col-span-5 p-8 gap-4 rounded-lg text-slate-900 relative bg-white border border-slate-300/70'>
				<h5>
					יחד עם שליחת הפנייה, במתן מענה מאחד מחברי הצוות תקבלו תשובה באימייל ובאתר בפאנל הניהול, הישר מהפאנל
					ניתן להגיב להמשך השיחה ולשנות את הסטטוס שלה בכל עת
				</h5>
				<form onSubmit={handleSubmit}>
					<Collapse in={alert.show}>
						<Alert
							color={alert.style}
							sx={{ mb: 2 }}
						>
							{alert.message}
						</Alert>
					</Collapse>

					<div className='flex flex-col'>
						{RegisterInputs.map((input) =>
							input.type === 'dropdown' ? (
								<TopicDropdown
									key={input.id}
									id={input.id}
									title={input.title}
									value={state[input.id].value}
									setValue={(e, newValue) => setTopic(newValue)}
									type={input.id}
									className={input.id}
									loading={state.loading}
								/>
							) : (
								<TextField
									key={input.id}
									id={input.id}
									label={input.title}
									variant='outlined'
									onChange={input.onClick}
									value={state[input.id].value}
									margin='normal'
									type={input.type}
									autoComplete={input.id}
									disabled={state.loading}
									InputProps={input.icon}
									helperText={
										state[input.id].status === 0
											? state[input.id].error
											: input.id === 'message'
											? 'הקפידו להרחיב ככל שניתן על מנת שנוכל לעזור לכם בצורה הטובה ביותר'
											: undefined
									}
									color={
										state[input.id].status === -1
											? 'primary'
											: state[input.id].status === 1
											? 'success'
											: 'error'
									}
									rows={4}
									multiline={input.id === 'message'}
								/>
							)
						)}
					</div>
					<div className='my-2' />

					<Button
						className='!w-full my-4'
						disabled={state.loading}
						type='submit'
						color='primary'
						variant='contained'
					>
						{state.loading ? 'אנא המתן...' : 'שליחת פנייה'}
					</Button>
				</form>
			</div>
			<div className='flex flex-col p-8 gap-4 rounded-lg text-slate-900 relative bg-white border border-slate-300/70 col-span-2'>
				{/* on isLoading - backdrop blur with next effect while fetching relavent blogs and show them as in the
				footer */}
			</div>
		</div>
	)
}

export default NewTicketForm
