import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import User, { type IUser } from '@/models/Company'

const AuthMiddleware = (req: NextApiRequest, res: NextApiResponse) => {
	return new Promise(async (resolve, reject) => {
		if (!('token' in req.cookies)) return reject(res.status(400).json({ success: false, error: 'error to auth' }))

		let decoded = jwt.verify(req.cookies.token as string, process.env.JWT_SECRET || '') as IDecodedUser

		const user = await User.findById(decoded.userId).limit(1)
		if (!user)
			return reject(res.status(401).json({ success: false, error: 'לא נמצא משתמש קיים עם הפרטים שנרשמו!' }))

		resolve(user)
	})
}

export interface IDBUser extends IUser {
	markModified(arg0: string): unknown
	save(): unknown
}

export interface IDecodedUser extends jwt.JwtPayload {
	userId: string
	iat: number
}

export default AuthMiddleware
