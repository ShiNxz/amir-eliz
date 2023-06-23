import EasyForm from '@/app/Blocks/EasyForm'
import FullDescription from './FullDescription'
import ProjectImage from './ProjectImage'
import ProjectSide from './Side'

const ProjectPage = () => {
	return (
		<div className='py-40 container'>
			<div className='grid grid-cols-11 mb-52'>
				<div className='col-span-4 border-l border-gray-200 pl-14'>
					<ProjectSide />
				</div>

				<div className='col-span-7 pr-14 flex flex-col gap-16'>
					<ProjectImage />
					<FullDescription />
					<FullDescription />
					<FullDescription />
				</div>
			</div>
			<EasyForm />
		</div>
	)
}

export default ProjectPage
