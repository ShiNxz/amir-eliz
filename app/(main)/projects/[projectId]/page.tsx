import EasyForm from '@/app/(main)/Blocks/EasyForm'
import FullDescription from './FullDescription'
import ProjectImage from './ProjectImage'
import ProjectSide from './Side'
import { redirect } from 'next/navigation'
import Project from '@/utils/models/Project'
import db from '@/utils/db'

const getProject = async (projectId: string) => {
	await db()

	const project = await Project.findById(projectId)
		.select('title description image type techs repository website fullDescription _id')
		.lean()

	if (!project) return redirect('/projects')
	else return project
}

const ProjectPage = async ({ params: { projectId } }: { params: { projectId: string } }) => {
	const project = await getProject(projectId)

	return (
		<div className='py-24 lg:py-40 lg:container'>
			<div className='grid lg:grid-cols-11 mb-52 px-4 sm:px-8 lg:px-0'>
				<div className='lg:col-span-4 lg:border-b-0 border-b lg:border-l border-l-0 border-gray-200 lg:pl-14 mb-12 lg:mb-0'>
					<ProjectSide
						title={project.title}
						description={project.description}
						repository={project.repository || undefined}
						website={project.website || undefined}
						techs={project.techs}
					/>
				</div>

				<div className='lg:col-span-7 lg:pr-14 flex flex-col gap-16'>
					<ProjectImage image={project.image} />
					<FullDescription fullDescription={project.fullDescription} />
				</div>
			</div>
			<EasyForm />
		</div>
	)
}

export default ProjectPage
