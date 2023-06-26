import { useEffect, useState } from 'react'
import { useForm } from '@mantine/form'
import { TextInput, Group, Button, LoadingOverlay, Modal, Checkbox } from '@mantine/core'
import useCompaniesStore from '../store'

const Form = () => {
	const [isLoading, setIsLoading] = useState(false)

	const modal = useCompaniesStore((state) => state.modal)
	const setModal = useCompaniesStore((state) => state.setModal)

	const handleClose = () => setModal({ ...modal, open: false })

	const isCloseOutsideDisabled = false

	useEffect(() => {
		modal.company
			? form.setValues({
					name: modal.company.name,
					ownerName: modal.company.user.name,
					ownerPhone: modal.company.user.phone,
					ownerIsAdmin: modal.company.user.isAdmin,
			  })
			: form.reset()
	}, [modal.company])

	const form = useForm({
		initialValues: {
			name: '',
			ownerName: '',
			ownerPhone: '',
			ownerIsAdmin: false,
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
			title={modal.company ? 'עריכת חברה' : 'הוספת חברה'}
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
					label='שם החברה'
					{...form.getInputProps('name')}
				/>

				<Group
					grow
					mt='md'
				>
					<TextInput
						label='שם בעל החברה'
						{...form.getInputProps('ownerName')}
					/>
					<TextInput
						label='מספר הטלפון של בעל החברה'
						{...form.getInputProps('ownerPhone')}
					/>
				</Group>

				<Checkbox
					label='אדמין'
					mt='md'
					{...form.getInputProps('ownerIsAdmin', { type: 'checkbox' })}
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
