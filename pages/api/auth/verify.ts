import type { NextApiRequest, NextApiResponse } from 'next'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import axios from 'axios'
import db from '@/utils/db'
import User from '@/models/User'
import jwt from 'jsonwebtoken'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
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

				const user = await User.findOne({ phone })
				if (!user) return res.status(400).json({ success: false, error: 'המשתמש לא נמצא' })

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
							userId: user._id,
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
