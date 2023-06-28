'use client'

import type { IProject } from '@/utils/models/Project'
import { useEffect, useState } from 'react'
import { Button, LoadingOverlay, Modal, TransferList, TransferListData } from '@mantine/core'
import useCompaniesStore from '../store'
import axios from 'axios'
import notification, { updateNotification } from '@/utils/functions/notification'

const ProjectsToList = (projects: IProject[]) =>
	projects.map((project) => ({ value: project._id.toString(), label: project.title }))

const ProjectsForm = () => {
	const [isLoading, setIsLoading] = useState(false)

	const mutate = useCompaniesStore((state) => state.mutate)
	const projectModal = useCompaniesStore((state) => state.projectModal)
	const setProjectModal = useCompaniesStore((state) => state.setProjectModal)
	const unusedProjects = useCompaniesStore((state) => state.unusedProjects)

	const [projects, setProjects] = useState<TransferListData>([[], []])

	const handleClose = () => setProjectModal({ ...projectModal, open: false })

	useEffect(() => {
		projectModal.company &&
			setProjects([
				ProjectsToList(unusedProjects).filter(
					(project) => !projectModal.company?.projects.find((p) => p._id.toString() === project.value)
				),
				ProjectsToList(projectModal.company.projects),
			])
	}, [projectModal])

	const handleSubmit = async () => {
		if (!projectModal.company) return

		notification(projectModal.company._id.toString(), 'מעדכן שינויים', 'מעדכן את הפרויקטים..')
		setIsLoading(true)

		try {
			await axios({
				method: 'PATCH',
				url: '/api/admin/companies',
				data: {
					id: projectModal.company._id,
					projects,
				},
			})

			await mutate()
			handleClose()

			updateNotification(projectModal.company._id.toString(), 'אישור', 'השינויים נשמרו בהצלחה')
		} catch (e) {
			console.log(e)

			updateNotification(
				projectModal.company._id.toString(),
				'שגיאה!',
				(e as any).response?.data?.message || 'אירעה שגיאה בעת עדכון החברה',
				'error'
			)
		}

		setIsLoading(false)
	}

	return (
		<Modal
			opened={projectModal.open}
			onClose={isLoading ? () => {} : handleClose}
			title={`שיוך פרויקטים לחברה: ${projectModal.company?.name}`}
			classNames={{
				title: '!text-xl !font-medium',
			}}
			withCloseButton={!isLoading}
			closeOnClickOutside={!isLoading}
			size='xl'
			centered
		>
			<div>
				<LoadingOverlay visible={isLoading} />

				<TransferList
					value={projects}
					onChange={setProjects}
					titles={['פרויקטים', 'פרויקטים משויכים']}
					breakpoint='sm'
					searchPlaceholder='חיפוש...'
					nothingFound='לא נמצאו תוצאות'
				/>

				<Button
					color='blue'
					type='submit'
					className='float-left my-4 mt-8'
					onClick={handleSubmit}
				>
					שמור שינויים
				</Button>
			</div>
		</Modal>
	)
}

export default ProjectsForm
