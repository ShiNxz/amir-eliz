import type { Domain } from '@/utils/models/Domain'
import axios from 'axios'
import { Text } from '@mantine/core'
import { modals } from '@mantine/modals'
import { mutate } from 'swr'
import notification, { updateNotification } from '@/utils/functions/notification'

const openDeleteModal = (domain: Domain) =>
	modals.openConfirmModal({
		modalId: 'delete-domain',
		title: `מחיקת דומיין: ${domain.domain}`,
		centered: true,
		children: <Text size='sm'>האם אתה בטוח שאתה רוצה למחוק את הדומיין?</Text>,
		labels: { confirm: 'מחיקה', cancel: 'ביטול' },
		confirmProps: { color: 'red' },
		onConfirm: () => handleDeleteDomain(domain),
	})

const handleDeleteDomain = async (domain: Domain) => {
	notification(domain._id.toString(), 'מחיקת דומיין..', 'אנא המתן')

	try {
		await axios({
			method: 'DELETE',
			url: `/api/admin/domains?id=${domain._id}`,
		})

		await mutate('/api/admin/domains')

		updateNotification(domain._id.toString(), 'אישור', 'הדומיין נמחקה בהצלחה!')
	} catch (e) {
		console.log(e)
		updateNotification(
			domain._id.toString(),
			'שגיאה!',
			(e as any).response?.data?.message || 'חלה שגיאה בעת מחיקת הדומיין',
			'error'
		)
	}

	modals.close('delete-domain')
}

export default openDeleteModal
