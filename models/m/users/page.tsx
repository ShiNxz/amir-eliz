import Table from './components/Table'
import Title from './components/Title'
import { UserUsersStore } from './store'

const FormsPage = () => {
	return (
		<>
			<UserUsersStore />
			<Title />
			<Table />
		</>
	)
}

export const metadata = {
	title: `${process.env.NEXT_PUBLIC_WEBSITE_NAME} | ניהול משתמשים`,
}

export default FormsPage
