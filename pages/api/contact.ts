import type { NextApiRequest, NextApiResponse } from 'next'
import db from '@/utils/db'
import ContactForm from '@/utils/models/Contact'
import contactSchema from '@/utils/schemas/contact'
import limiter from '@/utils/rateLimits'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	limiter(req, res, async () => {
		await db()
		const { method } = req

		switch (method) {
			case 'POST': {
				try {
					const data = contactSchema.parse(req.body)
					const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress

					const form = await ContactForm.create({ ...data, ipAddress })

					return res.status(200).json({ success: true, form })
				} catch (error) {
					return res.status(500).json({ success: false, error })
				}
			}

			default:
				return res.status(401).end()
		}
	})
}

export default handler
