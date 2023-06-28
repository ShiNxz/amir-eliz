'use client'

import { useEffect, useState } from 'react'
import { useForm, zodResolver } from '@mantine/form'
import { TextInput, Group, Button, LoadingOverlay, Modal, Checkbox } from '@mantine/core'
import useCompaniesStore from '../store'
import companySchema from '@/utils/schemas/company'
import axios, { AxiosError } from 'axios'
import { notifications } from '@mantine/notifications'
import { FaCheck, FaCross } from 'react-icons/fa'
import notification, { updateNotification } from '@/utils/functions/notification'

const Form = () => {
	const [isLoading, setIsLoading] = useState(false)

	const mutate = useCompaniesStore((state) => state.mutate)
	const modal = useCompaniesStore((state) => state.modal)
	const setModal = useCompaniesStore((state) => state.setModal)

	const handleClose = () => setModal({ ...modal, open: false })

	useEffect(() => {
		modal.company ? form.setValues(modal.company) : form.reset()
	}, [modal])

	const form = useForm({
		initialValues: {
			name: '',
			user: {
				name: '',
				phone: '',
				isAdmin: false,
			},
		},
		validate: zodResolver(companySchema),
	})

	const handleSubmit = async () => {
		const isEdit = !!modal.company

		notification('company', form.values.name, isEdit ? 'מעדכן חברה...' : 'מוסיף חברה...')

		setIsLoading(true)

		try {
			await axios({
				method: isEdit ? 'PUT' : 'POST',
				url: '/api/admin/companies',
				data: modal.company ? { ...form.values, id: modal.company._id } : form.values,
			})

			await mutate()
			handleClose()

			updateNotification('company', form.values.name, isEdit ? 'החברה עודכנה בהצלחה' : 'החברה נוספה בהצלחה')
		} catch (e) {
			console.log(e)

			updateNotification(
				'company',
				form.values.name,
				(e as any).response?.data?.message || isEdit
					? 'אירעה שגיאה בעת עדכון החברה'
					: 'אירעה שגיאה בעת הוספת החברה',
				'error'
			)
		}

		setIsLoading(false)
	}

	return (
		<Modal
			opened={modal.open}
			onClose={isLoading ? () => {} : handleClose}
			title={modal.company ? 'עריכת חברה' : 'הוספת חברה'}
			classNames={{
				title: '!text-xl !font-medium',
			}}
			withCloseButton={!isLoading}
			closeOnClickOutside={!isLoading}
			centered
		>
			<form onSubmit={form.onSubmit(handleSubmit)}>
				<LoadingOverlay visible={isLoading} />

				<TextInput
					data-autofocus
					label='שם החברה'
					{...form.getInputProps('name')}
				/>

				<Group
					grow
					mt='md'
				>
					<TextInput
						label='שם בעל החברה'
						{...form.getInputProps('user.name')}
					/>
					<TextInput
						label='מספר הטלפון של בעל החברה'
						{...form.getInputProps('user.phone')}
					/>
				</Group>

				<Checkbox
					label='אדמין'
					mt='md'
					{...form.getInputProps('user.isAdmin', { type: 'checkbox' })}
				/>

				<Button
					color='blue'
					type='submit'
					className='float-left my-4 mt-8'
				>
					{modal.company ? 'עריכת חברה' : 'הוספת חברה'}
				</Button>
			</form>
		</Modal>
	)
}

export default Form
