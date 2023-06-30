'use client'

import { useEffect, useState } from 'react'
import { useForm, zodResolver } from '@mantine/form'
import { TextInput, Button, LoadingOverlay, Modal, Select } from '@mantine/core'
import { DateInput } from '@mantine/dates'
import useCompaniesStore from '../store'
import domainSchema, { DOMAIN_PROVIDERS, type DomainProvider } from '@/utils/schemas/domain'
import axios from 'axios'
import notification, { updateNotification } from '@/utils/functions/notification'
import { BiHash } from 'react-icons/bi'

const Form = () => {
	const [isLoading, setIsLoading] = useState(false)

	const mutate = useCompaniesStore((state) => state.mutate)
	const modal = useCompaniesStore((state) => state.modal)
	const setModal = useCompaniesStore((state) => state.setModal)

	const handleClose = () => setModal({ ...modal, open: false })

	useEffect(() => {
		modal.domain
			? form.setValues({
					...modal.domain,
					provider: (modal.domain.provider as DomainProvider).name,
					expDate: new Date(modal.domain.expDate),
			  })
			: form.reset()
	}, [modal])

	const expDate = new Date()
	expDate.setFullYear(new Date().getFullYear() + 1)

	const form = useForm({
		initialValues: {
			domain: '',
			provider: '',
			expDate,
		},

		validate: zodResolver(domainSchema),
	})

	const handleSubmit = async () => {
		const isEdit = !!modal.domain

		notification('domain', form.values.domain, isEdit ? 'מעדכן דומיין...' : 'מוסיף דומיין...')

		setIsLoading(true)

		const dateInMs = form.values.expDate

		try {
			await axios({
				method: isEdit ? 'PUT' : 'POST',
				url: '/api/admin/domains',
				data: modal.domain
					? { ...form.values, id: modal.domain._id, expDate: dateInMs }
					: { ...form.values, expDate: dateInMs },
			})

			await mutate()
			handleClose()

			updateNotification('domain', form.values.domain, isEdit ? 'הדומיין עודכן בהצלחה' : 'הדומיין נוסף בהצלחה')
		} catch (e) {
			console.log(e)

			updateNotification(
				'domain',
				form.values.domain,
				(e as any).response?.data?.message || isEdit
					? 'אירעה שגיאה בעת עדכון הדומיין'
					: 'אירעה שגיאה בעת הוספת הדומיין',
				'error'
			)
		}

		setIsLoading(false)
	}

	return (
		<Modal
			opened={modal.open}
			onClose={isLoading ? () => {} : handleClose}
			title={modal.domain ? 'עריכת דומיין' : 'הוספת דומיין'}
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
					label='שם הדומיין'
					{...form.getInputProps('domain')}
				/>

				<Select
					className='mt-20'
					label='ספק'
					data={DOMAIN_PROVIDERS.map((provider) => provider.name)}
					transitionProps={{ transition: 'pop-top-left', duration: 80, timingFunction: 'ease' }}
					icon={<BiHash size='1rem' />}
					searchable
					nothingFound='לא נמצאו תוצאות'
					dropdownPosition='bottom'
					{...form.getInputProps('provider')}
				/>

				<DateInput
					className='mt-20'
					placeholder='תאריך חידוש'
					label='תאריך חידוש הבא'
					valueFormat='DD/MM/YYYY'
					{...form.getInputProps('expDate')}
				/>

				<Button
					color='blue'
					type='submit'
					className='float-left my-4 mt-20'
				>
					{modal.domain ? 'עריכת דומיין' : 'הוספת דומיין'}
				</Button>
			</form>
		</Modal>
	)
}

export default Form
