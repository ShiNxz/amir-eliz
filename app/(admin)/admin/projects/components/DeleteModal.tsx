import { useState } from 'react'
import { Group, Button, LoadingOverlay, Modal } from '@mantine/core'
import useProjectsStore from '../store'

const DeleteModal = () => {
	const [isLoading, setIsLoading] = useState(false)

	const deleteProject = useProjectsStore((state) => state.deleteProject)
	const setDeleteProject = useProjectsStore((state) => state.setDeleteProject)
	const handleClose = () => setDeleteProject(null)

	const handleDelete = () => {
		setIsLoading(true)
		setTimeout(() => {}, 3000)
		setIsLoading(false)
	}

	return (
		<Modal
			opened={!!deleteProject}
			onClose={isLoading ? () => {} : handleClose}
			title={`מחיקת פרויקט: ${deleteProject?.title || ''}`}
			classNames={{
				title: '!text-xl !font-medium',
			}}
			centered
		>
			<LoadingOverlay visible={isLoading} />

			<span>האם אתה בטוח שאתה רוצה למחוק את הפרויקט?</span>
			<Group
				grow
				pt={20}
			>
				<Button
					color='blue'
					onClick={handleClose}
				>
					ביטול
				</Button>
				<Button
					color='red'
					onClick={handleDelete}
				>
					אישור מחיקה
				</Button>
			</Group>
		</Modal>
	)
}

export default DeleteModal
