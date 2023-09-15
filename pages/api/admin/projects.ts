import type { NextApiRequest, NextApiResponse } from 'next'
import db from '@/utils/db'
import Project from '@/utils/models/Project'
import projectSchema from '@/utils/schemas/project'
import isAdminMiddleware from '@/utils/middlewares/isAdmin'
import Company from '@/utils/models/Company'
import limiter from '@/utils/rateLimits'
import Domain from '@/utils/models/Domain'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	return limiter(req, res, async () => {
		await db()
		const { method } = req

		const isAdmin = await isAdminMiddleware(req, res)
		if (!isAdmin) return

		switch (method) {
			case 'GET': {
				try {
					const projects = await Project.find().populate('connected_domain').lean()
					const domains = await Domain.find().lean()
					const companies = await Company.find().select('_id name projects').lean()

					const projectsWithCompaneis = projects.map((p) => {
						const projectId = p._id.toString()

						const filteredCompanies = companies
							.filter((c) => c.projects.find((project) => project._id.toString() === projectId))
							.map((c) => ({ _id: c._id, name: c.name }))

						return { ...p, companies: filteredCompanies }
					})

					// Get all the unused domains
					const unusedDomains = domains.filter(
						(d) => !projects.find((p) => p.connected_domain && p.connected_domain.domain === d.domain)
					)

					return res
						.status(200)
						.json({ success: true, projects: projectsWithCompaneis, domains, unusedDomains })
				} catch (error) {
					console.log(error)
					return res.status(500).json({ success: false, error })
				}
			}

			case 'POST': {
				try {
					const domains = await GetDomains()

					const data = projectSchema.parse(req.body)
					const domain = data.domain ? domains.find((d) => d.domain === req.body.domain) : null

					const project = await Project.create({
						...data,
						techs: data.techs.split(',').map((t) => t.trim()),
						connected_domain: domain,
					})

					return res.status(200).json({ success: true, project })
				} catch (error) {
					console.log(error)
					return res.status(500).json({ success: false, error })
				}
			}

			case 'PUT': {
				try {
					const domains = await GetDomains()

					const data = projectSchema.parse(req.body)
					const domain = data.domain ? domains.find((d) => d.domain === req.body.domain) : null

					const project = await Project.findByIdAndUpdate(
						req.body.id,
						{ ...data, techs: data.techs.split(',').map((t) => t.trim()), connected_domain: domain },
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

const GetDomains = async () => {
	const domains = await Domain.find().lean()
	return domains
}

// const GetUnusedDomains = async () => {
// 	const projects = await Project.find().populate('connected_domain').select('connected_domain').lean()
// 	const domains = await Domain.find().lean()
// 	const unusedDomains = domains.filter(
// 		(d) => !projects.find((p) => p.connected_domain && p.connected_domain.domain === d.domain)
// 	)

// 	return unusedDomains
// }

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
