import type { NextApiRequest, NextApiResponse } from 'next'
import db from '@/utils/db'
import Project from '@/utils/models/Project'
import projectSchema from '@/utils/schemas/project'
import isAdminMiddleware from '@/utils/middlewares/isAdmin'
import Company from '@/utils/models/Company'
import limiter from '@/utils/rateLimits'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	return limiter(req, res, async () => {
		await db()
		const { method } = req

		const isAdmin = await isAdminMiddleware(req, res)
		if (!isAdmin) return

		switch (method) {
			case 'GET': {
				try {
					const projects = await Project.find().lean()
					const companies = await Company.find().select('_id name projects').lean()

					const projectsWithCompaneis = projects.map((p) => {
						const projectId = p._id.toString()

						const filteredCompanies = companies
							.filter((c) => c.projects.find((project) => project._id.toString() === projectId))
							.map((c) => ({ _id: c._id, name: c.name }))

						return { ...p, companies: filteredCompanies }
					})

					return res.status(200).json({ success: true, projects: projectsWithCompaneis })
				} catch (error) {
					console.log(error)
					return res.status(500).json({ success: false, error })
				}
			}

			case 'POST': {
				try {
					const data = projectSchema.parse(req.body)
					const project = await Project.create({ ...data, techs: data.techs.split(',').map((t) => t.trim()) })

					return res.status(200).json({ success: true, project })
				} catch (error) {
					console.log(error)
					return res.status(500).json({ success: false, error })
				}
			}

			case 'PUT': {
				try {
					const data = projectSchema.parse(req.body)

					const project = await Project.findByIdAndUpdate(
						req.body.id,
						{ ...data, techs: data.techs.split(',').map((t) => t.trim()) },
						{
							new: true,
						}
					)
					if (!project) return res.status(404).json({ success: false, error: 'הפרויקט לא נמצא' })

					return res.status(200).json({ success: true, project })
				} catch (error) {
					console.log(error)
					return res.status(500).json({ success: false, error })
				}
			}

			case 'PATCH': {
				try {
					const fullDescription = req.body.fullDescription
					const id = req.body.id

					if (!fullDescription || !id)
						return res.status(400).json({ success: false, error: 'לא נשלחו פרטים' })

					const project = await Project.findByIdAndUpdate(
						id,
						{ fullDescription },
						{
							new: true,
						}
					)

					if (!project) return res.status(404).json({ success: false, error: 'הפרויקט לא נמצא' })

					return res.status(200).json({ success: true, project })
				} catch (error) {
					console.log(error)
					return res.status(500).json({ success: false, error })
				}
			}

			case 'DELETE': {
				try {
					const { id } = req.query
					if (!id) return res.status(400).json({ success: false, error: 'לא נשלח קוד' })

					const project = await Project.findByIdAndDelete(id)
					if (!project) return res.status(404).json({ success: false, error: 'הפרויקט לא נמצא' })

					return res.status(200).json({ success: true, project })
				} catch (error) {
					console.log(error)
					return res.status(500).json({ success: false, error })
				}
			}

			default:
				return res.status(401).end()
		}
	})
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
