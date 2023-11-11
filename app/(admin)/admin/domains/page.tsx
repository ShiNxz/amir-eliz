import CheckAdmin from '../UI/CheckAdmin'
import { DomainsStore } from '../domains/store'
import CheckDomains from './components/CheckDomains'
import Form from './components/Form'
import Table from './components/Table'
import Title from './components/Title'

const DomainsPage = () => {
	return (
		<>
			<DomainsStore />
			<Title />
			<Table />
			<Form />
			<CheckDomains />
			<CheckAdmin />
		</>
	)
}

export const metadata = {
    title: `${process.env.NEXT_PUBLIC_WEBSITE_NAME} | ניהול דומיינים`
}

export default DomainsPage
