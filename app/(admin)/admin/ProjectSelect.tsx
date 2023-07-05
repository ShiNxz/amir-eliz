'use client'

import { Select } from '@mantine/core'
import useProjectsStore from './my/store'

const ProjectSelect = () => {
	const { projects, selectedProject, setSelectedProject } = useProjectsStore()

	return (
		<Select
			className='w-full md:w-1/5'
			data={projects.map((project) => ({
				value: project._id.toString(),
				label: project.title,
			}))}
			label='פרויקט'
			radius='md'
			value={selectedProject?._id.toString()}
			onChange={(value) => {
				setSelectedProject(projects.find((project) => project._id.toString() === value) || null)
			}}
		/>
	)
}

export default ProjectSelect
