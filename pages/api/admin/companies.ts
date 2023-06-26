import type { NextApiRequest, NextApiResponse } from 'next'
import db from '@/utils/db'
import Company from '@/models/Company'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	await db()
	const { method } = req

	switch (method) {
		case 'GET': {
			try {
				const companies = await Company.find().lean()

				return res.status(200).json({ success: true, companies })
			} catch (error) {
				return res.status(500).json({ success: false, error })
			}
		}

		case 'POST': {
			try {
				return res.status(200).json({ success: true })
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
