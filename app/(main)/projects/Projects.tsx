'use client'

import { Skeleton } from '@mantine/core'
import { Project } from '../Blocks/Projects'
import useProjectsStore from './Store'

const Projects = () => {
	const projects = useProjectsStore((page) => page.projects)
	const filters = useProjectsStore((page) => page.filters)

	if(!projects || projects.length === 0) return <>
		<Skeleton height={450} radius="lg" />
		<Skeleton height={450} radius="lg" />
		<Skeleton height={450} radius="lg" />
		<Skeleton height={450} radius="lg" />
		<Skeleton height={450} radius="lg" />
		<Skeleton height={450} radius="lg" />
	</>

	const filteredProjects = projects
		.filter((project) => {
			if (filters.length === 0) return true

			const type = project.type
			const techs = project.techs

			const typeFilters = filters
				.filter((filter) => filter.startsWith('type'))
				.map((filter) => filter.split(':')[1])
			const techFilters = filters
				.filter((filter) => filter.startsWith('techs'))
				.map((filter) => filter.split(':')[1])

			if (typeFilters.length > 0 && !typeFilters.includes(type)) return false
			if (techFilters.length > 0 && !techFilters.some((tech) => techs.includes(tech))) return false

			return true
		})
		.map((project, index) => (
			<Project
				key={project._id}
				index={index}
				{...project}
			/>
		))

	return filteredProjects.length > 0 ? filteredProjects : <>לא נמצאו פרויקטים</>
}

export default Projects
