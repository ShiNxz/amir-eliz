'use client'

import { useEffect, useState } from 'react'
import { useForm, zodResolver } from '@mantine/form'
import { TextInput, Group, Button, LoadingOverlay, Modal, Checkbox, Textarea, Select } from '@mantine/core'
import { BiHash } from 'react-icons/bi'
import useProjectsStore from '../store'
import axios from 'axios'
import projectSchema from '@/utils/schemas/project'
import notification, { updateNotification } from '@/utils/functions/notification'

const Form = () => {
	const [isLoading, setIsLoading] = useState(false)

	const mutate = useProjectsStore((state) => state.mutate)
	const modal = useProjectsStore((state) => state.modal)
	const setModal = useProjectsStore((state) => state.setModal)

	const handleClose = () => setModal({ ...modal, open: false })

	useEffect(() => {
		modal.project ? form.setValues({ ...modal.project, techs: modal.project.techs.join(', ') }) : form.reset()
	}, [modal])

	const form = useForm({
		initialValues: {
			title: '',
			description: '',
			image: '',
			pinned: false,
			type: TYPES[0],
			techs: '',
			repository: '',
			website: '',
		},
		validate: zodResolver(projectSchema),
	})

	const handleSubmit = async () => {
		const isEdit = !!modal.project

		setIsLoading(true)

		const id = modal.project?._id.toString() || 'project'

		notification(id, form.values.title, 'מעדכן את הפרויקט..')

		try {
			await axios({
				method: isEdit ? 'PUT' : 'POST',
				url: '/api/admin/projects',
				data: modal.project ? { ...form.values, id: modal.project._id } : form.values,
			})

			await mutate()
			handleClose()

			updateNotification(id, form.values.title, 'השינויים נשמרו בהצלחה')
		} catch (e) {
			console.log(e)

			updateNotification(
				id,
				form.values.title,
				(e as any).response?.data?.message || 'אירעה שגיאה בעת עדכון הפרויקט',
				'error'
			)
		}

		await new Promise((resolve) => setTimeout(resolve, 1000))
		setIsLoading(false)
	}

	return (
		<Modal
			opened={modal.open}
			onClose={isLoading ? () => {} : handleClose}
			title={modal.project ? 'עריכת פרויקט' : 'הוספת פרויקט'}
			classNames={{
				title: '!text-xl !font-medium',
			}}
			withCloseButton={!isLoading}
			closeOnClickOutside={false}
			centered
			size='lg'
		>
			<form onSubmit={form.onSubmit(handleSubmit)}>
				<LoadingOverlay visible={isLoading} />

				<Group grow>
					<TextInput
						data-autofocus
						label='שם הפרויקט'
						{...form.getInputProps('title')}
					/>
					<Select
						label='סוג פיתוח'
						data={TYPES}
						transitionProps={{ transition: 'pop-top-left', duration: 80, timingFunction: 'ease' }}
						icon={<BiHash size='1rem' />}
						searchable
						nothingFound='לא נמצאו תוצאות'
						{...form.getInputProps('type')}
					/>
				</Group>

				<Textarea
					label='תיאור'
					mt='md'
					{...form.getInputProps('description')}
				/>

				<TextInput
					mt='md'
					label='תמונה'
					{...form.getInputProps('image')}
				/>

				<TextInput
					mt='md'
					label='טכנלוגיות (מופרדות בפסיק)'
					{...form.getInputProps('techs')}
				/>

				<Group
					grow
					mt='md'
				>
					<TextInput
						label='קישור לקוד מקור'
						{...form.getInputProps('repository')}
					/>

					<TextInput
						label='קישור לאתר לייב'
						{...form.getInputProps('website')}
					/>
				</Group>

				<Checkbox
					mt='md'
					label='הצגה באתר'
					{...form.getInputProps('pinned', { type: 'checkbox' })}
				/>

				<Button
					color='orange'
					type='submit'
					className='float-left my-4 mt-8'
				>
					{modal.project ? 'עריכת פרויקט' : 'הוספת פרויקט'}
				</Button>
			</form>
		</Modal>
	)
}

export const TYPES = [
	'אתר אינטרנט',
	'אפליקציה',
	'דף נחיתה',
	'מערכת ניהול / CRM',
	'מערכת תשלום',
	'מערכת ניהול תוכן',
	'חנות אינטרנט',
	'בלוג',
	'אתר סטארטאפ',
	'אתר תדמית',
	'אתר גיימינג',
]

export default Form
