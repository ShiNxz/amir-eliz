'use client'

import useAuth from '@/utils/hooks/useAuth'
import { Select } from '@mantine/core'
import useProjectsStore from './my/store'

const Title = () => {
	const { user } = useAuth()
	const { projects, selectedProject, setSelectedProject } = useProjectsStore()

	return (
		<div className='flex flex-row justify-between items-center'>
			<h2 className='text-4xl font-semibold text-gray-700'>ברוך הבא, {user!.user.name}</h2>
			<Select
				className='w-1/5'
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
		</div>
	)
}

export default Title
