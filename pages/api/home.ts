import type { NextApiRequest, NextApiResponse } from 'next'
import db from '@/utils/db'
import Project from '@/utils/models/Project'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	await db()
	const { method } = req

	switch (method) {
		case 'GET': {
			try {
				const projects = await Project.find({ pinned: true })
					.limit(3)
					.select('_id title description image type')
					.lean()

				return res.status(200).json({ success: true, projects })
			} catch (error) {
				return res.status(500).json({ success: false, error })
			}
		}

		default:
			return res.status(401).end()
	}
}

export interface IHomeResponse {
	success: boolean
	projects: IProject[]
}

export interface IProject {
	_id: string
	title: string
	description: string
	image: string
	type: string
}

export default handler
