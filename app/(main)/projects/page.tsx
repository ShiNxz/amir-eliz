import { UseStore } from './Store'
import Filters from './Filters'
import Title from './Title'
import Projects from './Projects'

const ProjectsPage = () => {
	return (
		<div className='py-40'>
			<Title />
			<UseStore />
			<div className='flex flex-col xl:grid grid-cols-1 xl:grid-cols-5 gap-10 container mt-8 xl:mt-20'>
				<Filters />

				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 col-span-4 gap-6 h-fit'>
					<Projects />
				</div>
			</div>
		</div>
	)
}

export default ProjectsPage
