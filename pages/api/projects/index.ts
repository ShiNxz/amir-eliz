import type { NextApiRequest, NextApiResponse } from 'next'
import db from '@/utils/db'
import Project from '@/models/Project'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	await db()
	const { method } = req

	switch (method) {
		case 'GET': {
			try {
				const projects = await Project.find().select('title description image type techs _id').lean()

				const types: string[] = []
				const techs: string[] = []

				projects.map((project) => {
					if (!types.includes(project.type)) types.push(project.type)
					project.techs.map((tech) => {
						if (!techs.includes(tech)) techs.push(tech)
					})
				})

				return res.status(200).json({ success: true, projects, types, techs })
			} catch (error) {
				return res.status(500).json({ success: false, error })
			}
		}

		case 'POST': {
			try {
				const project = await Project.findById(req.body.id)
				if (!project) return res.status(404).json({ success: false, error: 'Project not found' })

				project.fullDescription = req.body.fullDescription

				await project.save()

				return res.status(200).json({ success: true, project })
			} catch (error) {
				return res.status(500).json({ success: false, error })
			}
		}

		default:
			return res.status(401).end()
	}
}

export interface IProjectsResponse {
	success: boolean
	projects: IProject[]
	types: string[]
	techs: string[]
}

export interface IProject {
	_id: string
	title: string
	description: string
	image: string
	type: string
	techs: string[]
}

export default handler
