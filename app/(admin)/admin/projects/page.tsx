import CheckAdmin from '../UI/CheckAdmin'
import ContentForm from './components/ContentForm'
import Form from './components/Form'
import Table from './components/Table'
import Title from './components/Title'
import { ProjectsStore } from './store'

const ProjectsPage = () => {
	return (
		<>
			<ProjectsStore />
			<Title />
			<Table />
			<Form />
			<ContentForm />
			<CheckAdmin />
		</>
	)
}

export const metadata = {
	title: `${process.env.NEXT_PUBLIC_WEBSITE_NAME} | ניהול פרויקטים`,
}

export default ProjectsPage
