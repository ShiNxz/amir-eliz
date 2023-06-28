import type { NextApiRequest, NextApiResponse } from 'next'
import type { IDecodedCompany } from '@/utils/middlewares/isLoggedIn'
import db from '@/utils/db'
import jwt from 'jsonwebtoken'
import Company from '@/utils/models/Company'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	await db()
	const { method } = req

	switch (method) {
		case 'GET': {
			if (!('token' in req.cookies)) return res.status(400).json({ success: false, error: 'error to auth' })

			let decoded = jwt.verify(req.cookies.token as string, process.env.JWT_SECRET || '') as IDecodedCompany

			const company = await Company.findById(decoded.companyId).limit(1)
			if (!company) return res.status(401).json({ success: false, error: 'לא נמצא משתמש קיים עם הפרטים שנרשמו!' })

			const authUser: IAuthUser = {
				_id: company._id.toString(),
				user: {
					phone: company.user.phone,
					name: company.user.name,
				},
				name: company.name,
			}

			return res.status(200).json({ success: true, user: authUser })
		}

		default:
			return res.status(401).end()
	}
}

export interface IAuthUser {
	_id: string
	name: string
	user: {
		phone: string
		name: string
	}
}

export default handler
