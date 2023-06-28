'use client'

import { useEffect, useState } from 'react'
import TextEditor from '../../UI/Editor'
import editorProps from '../../UI/Editor/defProps'
import { useEditor } from '@tiptap/react'
import useProjectsStore from '../store'
import axios from 'axios'
import { Button, LoadingOverlay, Modal } from '@mantine/core'
import notification, { updateNotification } from '@/utils/functions/notification'

const ContentForm = () => {
	const [isLoading, setIsLoading] = useState(false)

	const mutate = useProjectsStore((state) => state.mutate)
	const modal = useProjectsStore((state) => state.modalContent)
	const setModal = useProjectsStore((state) => state.setModalContent)

	const editor = useEditor({
		...editorProps,
	})

	const handleClose = () => setModal({ ...modal, open: false })

	useEffect(() => {
		editor?.commands.setContent(modal.project?.fullDescription || '')
	}, [modal])

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!modal.project) return

		setIsLoading(true)

		const id = modal.project?._id.toString() || 'project'
		notification(id, modal.project.title, 'מעדכן את הפרויקט..')

		try {
			await axios({
				method: 'PATCH',
				url: '/api/admin/projects',
				data: { fullDescription: editor?.getHTML(), id: modal.project!._id },
			})

			await mutate()
			handleClose()

			updateNotification(id, modal.project.title, 'השינויים נשמרו בהצלחה')
		} catch (e) {
			console.log(e)

			updateNotification(
				id,
				modal.project.title,
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
			title='עריכת תוכן פרויקט'
			classNames={{
				title: '!text-xl !font-medium',
			}}
			withCloseButton={!isLoading}
			closeOnClickOutside={false}
			centered
			size='lg'
		>
			<form onSubmit={handleSubmit}>
				<LoadingOverlay visible={isLoading} />
				<TextEditor editor={editor} />

				<Button
					color='orange'
					type='submit'
					className='float-left my-4 mt-8'
				>
					עריכת תוכן
				</Button>
			</form>
		</Modal>
	)
}

export default ContentForm
