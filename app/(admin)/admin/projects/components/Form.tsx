import { useEffect, useState } from 'react'
import { useForm } from '@mantine/form'
import { TextInput, Group, Button, LoadingOverlay, Modal, Checkbox, Textarea } from '@mantine/core'
import useProjectsStore from '../store'

const Form = () => {
	const [isLoading, setIsLoading] = useState(false)

	const modal = useProjectsStore((state) => state.modal)
	const setModal = useProjectsStore((state) => state.setModal)

	const handleClose = () => setModal({ ...modal, open: false })

	const isCloseOutsideDisabled = false

	useEffect(() => {
		modal.project
			? form.setValues({
					title: modal.project.title,
					description: modal.project.description,
					image: modal.project.image,
					pinned: modal.project.pinned,
					type: modal.project.type,
					techs: modal.project.techs.join(', '),
					repository: modal.project.repository,
					website: modal.project.website,
					fullDescription: modal.project.fullDescription,
			  })
			: form.reset()
	}, [modal.project])

	const form = useForm({
		initialValues: {
			title: '',
			description: '',
			image: '',
			pinned: false,
			type: '',
			techs: '',
			repository: '',
			website: '',
			fullDescription: '',
		},
	})

	const handleSubmit = () => {
		setIsLoading(true)
		setTimeout(() => {}, 3000)
		setIsLoading(false)
	}

	return (
		<Modal
			opened={modal.open}
			onClose={handleClose}
			title={modal.project ? 'עריכת פרויקט' : 'הוספת פרויקט'}
			classNames={{
				title: '!text-xl !font-medium',
			}}
			closeOnClickOutside={isCloseOutsideDisabled}
			centered
		>
			<form onSubmit={form.onSubmit(handleSubmit)}>
				<LoadingOverlay visible={isLoading} />

				<TextInput
					data-autofocus
					label='שם הפרויקט'
					{...form.getInputProps('title')}
				/>
				<TextInput
					label='תגיות (מופרדות בפסיק)'
					{...form.getInputProps('tags')}
				/>
				<Textarea
					label='תיאור'
					{...form.getInputProps('description')}
				/>
				<TextInput
					label='תמונה'
					{...form.getInputProps('image')}
				/>
				<TextInput
					label='תמונה'
					{...form.getInputProps('image')}
				/>

				<Checkbox
					label='מסך בית?'
					{...form.getInputProps('pinned', { type: 'checkbox' })}
				/>

				<TextInput
					label='סוג פיתוח'
					{...form.getInputProps('type')}
				/>

				<TextInput
					label='טכנלוגיות (מופרדות בפסיק)'
					{...form.getInputProps('techs')}
				/>

				<TextInput
					label='קישור לקוד מקור'
					{...form.getInputProps('repository')}
				/>

				<TextInput
					label='קישור לאתר לייב'
					{...form.getInputProps('website')}
				/>

				<Textarea
					label='תיאור מלא'
					{...form.getInputProps('fullDescription')}
				/>

				<Group
					grow
					mt='md'
				></Group>

				<Button
					color='blue'
					type='submit'
					className='float-left my-4 mt-8'
				>
					{modal.project ? 'עריכת פרויקט' : 'הוספת פרויקט'}
				</Button>
			</form>
		</Modal>
	)
}

export default Form
