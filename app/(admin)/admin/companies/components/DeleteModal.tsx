import { useState } from 'react'
import { Group, Button, LoadingOverlay, Modal } from '@mantine/core'
import useCompaniesStore from '../store'

const DeleteModal = () => {
	const [isLoading, setIsLoading] = useState(false)

	const deleteCompany = useCompaniesStore((state) => state.deleteCompany)
	const setDeleteCompany = useCompaniesStore((state) => state.setDeleteCompany)
	const handleClose = () => setDeleteCompany(null)

	const handleDelete = () => {
		setIsLoading(true)
		setTimeout(() => {}, 3000)
		setIsLoading(false)
	}

	return (
		<Modal
			opened={!!deleteCompany}
			onClose={isLoading ? () => {} : handleClose}
			title={`מחיקת חברה: ${deleteCompany?.name || ''}`}
			classNames={{
				title: '!text-xl !font-medium',
			}}
			centered
		>
			<LoadingOverlay visible={isLoading} />

			<span>האם אתה בטוח שאתה רוצה למחוק את החברה?</span>
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
