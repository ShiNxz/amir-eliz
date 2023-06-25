import type { NextApiRequest, NextApiResponse } from 'next'
import db from '@/utils/db'
import Project from '@/models/Project'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	await db()
	const { method } = req

	const { projectId } = req.query

	switch (method) {
		case 'GET': {
			try {
				const project = await Project.findById(projectId)
					.select('title description image type techs repository website _id')
					.lean()

				return res.status(200).json({ success: true, project })
			} catch (error) {
				return res.status(500).json({ success: false, error })
			}
		}

		default:
			return res.status(401).end()
	}
}

export interface IProject {
	_id: string
	title: string
	description: string
	image: string
	type: string
	techs: string[]
	repository?: string
	website?: string
}

export default handler
