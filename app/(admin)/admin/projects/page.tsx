import Table from './components/Table'
import Title from './components/Title'
import { ProjectsStore } from './store'

const ProjectsPage = () => {
	return (
		<>
			<ProjectsStore />
			<Title />
			<Table />
		</>
	)
}

export const metadata = {
	title: `${process.env.NEXT_PUBLIC_WEBSITE_NAME} | ניהול פרויקטים`,
}

export default ProjectsPage
