import Table from './components/Table'
import Title from './components/Title'
import { UserTicketsStore } from './store'

const FormsPage = () => {
	return (
		<>
			<UserTicketsStore />
			<Title />
			<Table />
		</>
	)
}

export const metadata = {
	title: `${process.env.NEXT_PUBLIC_WEBSITE_NAME} | ניהול פניות`,
}

export default FormsPage
