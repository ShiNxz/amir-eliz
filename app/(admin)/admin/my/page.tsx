import PasswordModal from './components/PasswordModal'
import Table from './components/Table'
import Title from './components/Title'
import { ProjectsStore } from './store'

const ProjectsPage = () => {
	return (
		<>
			<ProjectsStore />
			<Title />
			<Table />
			<PasswordModal />
		</>
	)
}

export const metadata = {
    title: `${process.env.NEXT_PUBLIC_WEBSITE_NAME} | הפרויקטים שלי`
}

export default ProjectsPage
