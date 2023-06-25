import { UseStore } from './Store'
import Filters from './Filters'
import Title from './Title'
import Projects from './Projects'

const ProjectsPage = () => {
	return (
		<div className='py-40'>
			<Title />
			<UseStore />
			<div className='grid grid-cols-5 gap-10 container mt-20'>
				<Filters />

				<div className='grid grid-cols-3 col-span-4 gap-6'>
					<Projects />
				</div>
			</div>
		</div>
	)
}

export default ProjectsPage
