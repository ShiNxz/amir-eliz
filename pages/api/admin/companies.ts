import type { NextApiRequest, NextApiResponse } from 'next'
import db from '@/utils/db'
import Company from '@/utils/models/Company'
import Project from '@/utils/models/Project'
import companySchema from '@/utils/schemas/company'
import isAdminMiddleware from '@/utils/middlewares/isAdmin'
import { z } from 'zod'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	await db()
	const { method } = req

	const isAdmin = await isAdminMiddleware(req, res)
	if (!isAdmin) return

	switch (method) {
		case 'GET': {
			try {
				const companies = await Company.find().populate('projects').lean()
				const projects = await Project.find().lean()

				return res.status(200).json({ success: true, companies, projects })
			} catch (error) {
				return res.status(500).json({ success: false, error })
			}
		}

		case 'POST': {
			try {
				const data = companySchema.parse(req.body)
				const company = await Company.create(data)

				return res.status(200).json({ success: true, company })
			} catch (error) {
				console.log(error)
				return res.status(500).json({ success: false, error })
			}
		}

		case 'PUT': {
			try {
				const data = companySchema.parse(req.body)

				const company = await Company.findByIdAndUpdate(req.body.id, data, {
					new: true,
				})
				if (!company) return res.status(404).json({ success: false, error: 'החברה לא נמצאת' })

				return res.status(200).json({ success: true, company })
			} catch (error) {
				console.log(error)
				return res.status(500).json({ success: false, error })
			}
		}

		// Projects
		case 'PATCH': {
			try {
				const { projects, id } = projectsSchema.parse(req.body)
				const [_, newProjects] = projects

				const company = await Company.findById(id)
				if (!company) return res.status(404).json({ success: false, error: 'החברה לא נמצאה' })

				company.projects = []

				for await (const project of newProjects) {
					const { value } = project

					const projectExists = await Project.findById(value)

					if (projectExists) company.projects.push(projectExists)
				}

				await company.save()

				return res.status(200).json({ success: true, company })
			} catch (error) {
				console.log(error)
				return res.status(500).json({ success: false, error })
			}
		}

		case 'DELETE': {
			try {
				const { id } = req.query
				if (!id) return res.status(400).json({ success: false, error: 'לא נשלח קוד' })

				const company = await Company.findByIdAndDelete(id)
				if (!company) return res.status(404).json({ success: false, error: 'החברה לא נמצא' })

				return res.status(200).json({ success: true, company })
			} catch (error) {
				console.log(error)
				return res.status(500).json({ success: false, error })
			}
		}

		default:
			return res.status(401).end()
	}
}

const projectsSchema = z.object({
	id: z.string().nonempty(),
	projects: z.array(
		z.array(
			z.object({
				value: z.string().nonempty(),
				label: z.string().nonempty(),
			})
		)
	),
})

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
