import { notifications } from '@mantine/notifications'
import { FaCheck, FaCross } from 'react-icons/fa'

const notification = (notificationId: null | string, title: string, text: string) =>
	notifications.show({
		id: notificationId ? notificationId : '',
		loading: notificationId ? true : false,
		title,
		message: text,
		autoClose: notificationId ? false : 3000,
		withCloseButton: notificationId ? false : true,
		withBorder: true,
	})

export const updateNotification = async (
	notificationId: string,
	title: string,
	text: string,
	type: 'success' | 'error' = 'success',
	icon: boolean = false
) => {
	const Icon = type === 'success' ? FaCheck : FaCross
	const color = type === 'success' ? 'teal' : 'red'

	notifications.update({
		id: notificationId,
		color,
		title,
		message: text,
		icon: icon ? <Icon size='1rem' /> : undefined,
		autoClose: 3000,
	})
}

export default notification
