'use client'

import { useEffect, useState } from 'react'
import { useForm, zodResolver } from '@mantine/form'
import notification, { updateNotification } from '@/utils/functions/notification'
import { TextInput, Button, LoadingOverlay, Modal, Text } from '@mantine/core'
import { myProjectPasswordSchema } from '@/utils/schemas/myProject'
import useProjectsStore from '../store'
import axios from 'axios'

const PasswordModal = () => {
	const [isLoading, setIsLoading] = useState(false)

	const mutate = useProjectsStore((state) => state.mutate)
	const passwordModal = useProjectsStore((state) => state.passwordModal)
	const setPasswordModal = useProjectsStore((state) => state.setPasswordModal)

	const handleClose = () => setPasswordModal({ ...passwordModal, open: false })

	useEffect(() => {
		passwordModal.project ? form.setValues({ password: passwordModal.project.password || '' }) : form.reset()
	}, [passwordModal])

	const form = useForm({
		initialValues: {
			password: '',
		},

		validate: zodResolver(myProjectPasswordSchema),
	})

	const handleSubmit = async () => {
		if (!passwordModal.project) return

		notification('projectPassword', passwordModal.project.title, 'אנא המתן לעדכון הסיסמה...')

		setIsLoading(true)

		try {
			await axios({
				method: 'PATCH',
				url: '/api/admin/my',
				data: { id: passwordModal.project._id, password: form.values.password },
			})

			await mutate()
			handleClose()

			updateNotification('projectPassword', passwordModal.project.title, 'הסיסמה עודכנה בהצלחה!')
		} catch (e) {
			console.log(e)

			updateNotification(
				'domain',
				passwordModal.project.title,
				(e as any).response?.data?.message
					? (e as any).response?.data?.message
					: 'אירעה שגיאה בעת עדכון הסיסמה',
				'error'
			)
		}

		setIsLoading(false)
	}

	return (
		<Modal
			opened={passwordModal.open}
			onClose={isLoading ? () => {} : handleClose}
			title='עדכון סיסמה'
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
					label='סיסמה'
					{...form.getInputProps('password')}
				/>

				<Text mt={14}>שימו לב ששינוי הסיסמה יעביר את האתר למצב תחזוקה! ושינוי סטטוס האתר יאפס את הסיסמה</Text>

				<Button
					mt={20}
					color='blue'
					type='submit'
					className='float-left my-4'
				>
					עדכון סיסמה
				</Button>
			</form>
		</Modal>
	)
}

export default PasswordModal
