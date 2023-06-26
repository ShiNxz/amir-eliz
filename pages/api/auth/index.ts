import type { NextApiRequest, NextApiResponse } from 'next'
import type { IDecodedUser } from '@/utils/middlewares/isLoggedIn'
import db from '@/utils/db'
import jwt from 'jsonwebtoken'
import User from '@/models/User'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	await db()
	const { method } = req

	switch (method) {
		case 'GET': {
			if (!('token' in req.cookies)) return res.status(400).json({ success: false, error: 'error to auth' })

			let decoded = jwt.verify(req.cookies.token as string, process.env.JWT_SECRET || '') as IDecodedUser

			const user = await User.findById(decoded.userId).limit(1)
			if (!user) return res.status(401).json({ success: false, error: 'לא נמצא משתמש קיים עם הפרטים שנרשמו!' })

			const authUser: IAuthUser = {
				_id: user._id.toString(),
				phone: user.phone,
				name: user.name,
			}

			return res.status(200).json({ success: true, user: authUser })
		}

		default:
			return res.status(401).end()
	}
}

export interface IAuthUser {
	_id: string
	phone: string
	name: string
}

export default handler
