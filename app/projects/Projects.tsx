'use client'

import { Project } from '../Blocks/Projects'
import useProjectsStore from './Store'

const Projects = () => {
	const projects = useProjectsStore((page) => page.projects)
	return (
		<>
			{projects.map((project, index) => (
				<Project
					key={project._id}
					index={index}
					{...project}
				/>
			))}
		</>
	)
}

export default Projects
