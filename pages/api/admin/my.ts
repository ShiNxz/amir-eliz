import type { NextApiRequest, NextApiResponse } from 'next'
import isAuthMiddleware from '@/utils/middlewares/isLoggedIn'
import Company from '@/utils/models/Company'
import limiter from '@/utils/rateLimits'
import db from '@/utils/db'
import Project, { TStatus } from '@/utils/models/Project'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	return limiter(req, res, async () => {
		await db()
		const { method } = req

		const company = await isAuthMiddleware(req, res)
		if (!company) return

		switch (method) {
			case 'GET': {
				try {
					const userCompany = await Company.findById(company._id).populate('projects').lean()
					if (!userCompany) return res.status(404).json({ success: false, error: 'Company not found' })

					const { projects } = userCompany

					return res.status(200).json({ success: true, projects })
				} catch (error) {
					console.log(error)
					return res.status(500).json({ success: false, error })
				}
			}

			case 'PUT': {
				try {
					const { id, status } = req.body as { id: string; status: TStatus }
					if (!id || !status) return res.status(400).json({ success: false, error: 'Missing fields' })
					if (status !== 'ONLINE' && status !== 'OFFLINE' && status !== 'MAINTENANCE')
						return res.status(400).json({ success: false, error: 'Invalid status' })

					const project = await Project.findById(id)
					if (!project) return res.status(404).json({ success: false, error: 'Project not found' })

					project.status = status
					if (status === 'ONLINE' || status === 'OFFLINE') project.password = null

					await project.save()

					return res.status(200).json({ success: true, project })
				} catch (error) {
					console.log(error)
					return res.status(500).json({ success: false, error })
				}
			}

			case 'PATCH': {
				try {
					const { id, password } = req.body
					if (!id || !password) return res.status(400).json({ success: false, error: 'Missing fields' })

					const project = await Project.findById(id)
					if (!project) return res.status(404).json({ success: false, error: 'Project not found' })

					project.status = password ? 'MAINTENANCE' : 'ONLINE'
					project.password = password ?? null

					await project.save()

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
	status: TStatus
}

export default handler
