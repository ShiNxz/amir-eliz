import Table from './components/Table'
import Title from './components/Title'
import { CompaniesStore } from './store'

const CompaniesPage = () => {
	return (
		<>
			<CompaniesStore />
			<Title />
			<Table />
		</>
	)
}

export const metadata = {
	title: `${process.env.NEXT_PUBLIC_WEBSITE_NAME} | ניהול חברות`,
}

export default CompaniesPage
