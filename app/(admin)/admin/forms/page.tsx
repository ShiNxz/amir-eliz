import Table from './components/Table'
import Title from './components/Title'
import { ContactFormsStore } from './store'

const ContactFormsPage = () => {
	return (
		<>
			<ContactFormsStore />
			<Title />
			<Table />
		</>
	)
}

export const metadata = {
	title: `${process.env.NEXT_PUBLIC_WEBSITE_NAME} | ניהול פניות`,
}

export default ContactFormsPage
