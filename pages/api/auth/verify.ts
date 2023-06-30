import type { NextApiRequest, NextApiResponse } from 'next'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import axios from 'axios'
import db from '@/utils/db'
import Company from '@/utils/models/Company'
import jwt from 'jsonwebtoken'
import limiter from '@/utils/rateLimits'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	limiter(req, res, async () => {
		await db()
		const { method } = req

		switch (method) {
			case 'POST': {
				try {
					const { phone, code } = req.body
					if (!phone) return res.status(400).json({ success: false, error: 'Phone number is required' })

					const defaultCountry = 'IL' // Default country code for Israel

					const phoneNumber = parsePhoneNumberFromString(phone, defaultCountry)
					if (!phoneNumber) return res.status(400).json({ success: false, error: 'מספר הטלפון שגוי' })

					const company = await Company.findOne({ 'user.phone': phone })
					if (!company) return res.status(400).json({ success: false, error: 'המשתמש לא נמצא' })

					try {
						const formattedNumber = phoneNumber.format('E.164')

						await axios.post(
							`${process.env.VERIFLY_API_URL}/verify`,
							{
								phone: formattedNumber,
								code,
							},
							{
								headers: {
									Authorization: `Bearer ${process.env.VERIFLY_API_KEY}`,
								},
							}
						)

						const token = jwt.sign(
							{
								companyId: company._id,
							},
							process.env.JWT_SECRET || ''
						)

						return res.status(200).json({ success: true, token })
					} catch (error) {
						console.log((error as any).response.data)
						return res.status(500).json({ success: false, error: (error as any).response.data })
					}
				} catch (error) {
					return res.status(500).json({ success: false, error })
				}
			}

			default:
				return res.status(401).end()
		}
	})
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
