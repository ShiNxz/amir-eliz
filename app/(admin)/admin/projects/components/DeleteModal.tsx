import type { IProject } from '@/utils/models/Project'
import { Text } from '@mantine/core'
import { modals } from '@mantine/modals'
import { mutate } from 'swr'
import axios from 'axios'
import { updateNotification } from '@/utils/functions/notification'

const openDeleteModal = (project: IProject) =>
	modals.openConfirmModal({
		modalId: 'delete-project',
		title: `מחיקת פרויקט: ${project.title}`,
		centered: true,
		children: <Text size='sm'>האם אתה בטוח שאתה רוצה למחוק את הפרויקט?</Text>,
		labels: { confirm: 'מחיקה', cancel: 'ביטול' },
		confirmProps: { color: 'red' },
		onConfirm: () => handleDeleteProject(project),
		closeOnConfirm: false,
	})

const handleDeleteProject = async (project: IProject) => {
	updateNotification(project._id.toString(), project.title, 'מוחק את הפרויקט...')

	try {
		await axios({
			method: 'DELETE',
			url: `/api/admin/projects?id=${project._id}`,
		})

		await mutate('/api/admin/projects')

		updateNotification(project._id.toString(), project.title, 'הפרויקט נמחק בהצלחה!')
	} catch (e) {
		console.log(e)

		updateNotification(
			project._id.toString(),
			project.title,
			(e as any).response?.data?.message || 'אירעה שגיאה בעת מחיקת הפרויקט',
			'error'
		)
	}

	modals.close('delete-project')
}

export default openDeleteModal
