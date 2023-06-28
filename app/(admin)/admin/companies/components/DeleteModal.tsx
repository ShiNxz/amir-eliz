import type { ICompany } from '@/utils/models/Company'
import axios from 'axios'
import { Text } from '@mantine/core'
import { modals } from '@mantine/modals'
import { mutate } from 'swr'
import notification, { updateNotification } from '@/utils/functions/notification'

const openDeleteModal = (company: ICompany) =>
	modals.openConfirmModal({
		modalId: 'delete-company',
		title: `מחיקת חברה: ${company.name}`,
		centered: true,
		children: <Text size='sm'>האם אתה בטוח שאתה רוצה למחוק את החברה?</Text>,
		labels: { confirm: 'מחיקה', cancel: 'ביטול' },
		confirmProps: { color: 'red' },
		onConfirm: () => handleDeleteCompany(company),
	})

const handleDeleteCompany = async (company: ICompany) => {
	notification(company._id.toString(), 'מחיקת חברה..', 'אנא המתן')

	try {
		await axios({
			method: 'DELETE',
			url: `/api/admin/companies?id=${company._id}`,
		})

		await mutate('/api/admin/companies')

		updateNotification(company._id.toString(), 'אישור', 'החברה נמחקה בהצלחה!')
	} catch (e) {
		console.log(e)
		updateNotification(
			company._id.toString(),
			'שגיאה!',
			(e as any).response?.data?.message || 'חלה שגיאה בעת מחיקת החברה',
			'error'
		)
	}
	modals.close('delete-company')
}

export default openDeleteModal
