import { Work } from '../Blocks/Works'
import Filters from './Filters'
import Title from './Title'

const ProjectsPage = () => {
	return (
		<div className='py-40'>
			<Title />
			<div className='grid grid-cols-5 gap-10 container mt-20'>
				<Filters />

				<div className='grid grid-cols-3 col-span-4 gap-6'>
					<Work index={0} />
					<Work index={1} />
					<Work index={2} />
					<Work index={3} />
					<Work index={4} />
					<Work index={5} />
				</div>
			</div>
		</div>
	)
}

export default ProjectsPage
