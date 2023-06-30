import type { NextApiRequest, NextApiResponse } from 'next'
import db from '@/utils/db'
import isAdminMiddleware from '@/utils/middlewares/isAdmin'
import limiter from '@/utils/rateLimits'
import ContactForm from '@/utils/models/Contact'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	return limiter(req, res, async () => {
		await db()
		const { method } = req

		const isAdmin = await isAdminMiddleware(req, res)
		if (!isAdmin) return

		switch (method) {
			case 'GET': {
				try {
					const forms = await ContactForm.find().lean().sort({ createdAt: -1 })

					return res.status(200).json({ success: true, forms })
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
