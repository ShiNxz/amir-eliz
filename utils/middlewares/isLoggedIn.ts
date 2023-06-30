import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import Company, { type ICompany } from '@/utils/models/Company'

const isAuthMiddleware = (req: NextApiRequest, res: NextApiResponse): Promise<ICompany> => {
	return new Promise(async (resolve) => {
		if (!('token' in req.cookies)) return res.status(400).json({ success: false, error: 'error to auth' })

		let decoded = jwt.verify(req.cookies.token as string, process.env.JWT_SECRET || '') as IDecodedCompany

		const company = await Company.findById(decoded.companyId).limit(1)
		if (!company) return res.status(401).json({ success: false, error: 'לא נמצא משתמש קיים עם הפרטים שנרשמו!' })

		resolve(company)
	})
}

export interface IDBCompany extends ICompany {
	markModified(arg0: string): unknown
	save(): unknown
}

export interface IDecodedCompany extends jwt.JwtPayload {
	companyId: string
	iat: number
}

export default isAuthMiddleware
