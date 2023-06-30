import type { NextApiRequest, NextApiResponse } from 'next'
import db from '@/utils/db'
import ContactForm from '@/utils/models/Contact'
import contactSchema from '@/utils/schemas/contact'
import limiter from '@/utils/rateLimits'

const getRequestIP = (req: NextApiRequest) => {
	let ipAddress = req.headers['x-real-ip'] as string

	const forwardedFor = req.headers['x-forwarded-for'] as string
	if (forwardedFor) {
		const ips = forwardedFor.split(',').map((ip: string) => ip.trim())
		ipAddress = ips[0]
	} else if (req.socket.remoteAddress) {
		ipAddress = req.socket.remoteAddress
	}

	return ipAddress
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	return limiter(req, res, async () => {
		await db()
		const { method } = req

		switch (method) {
			case 'POST': {
				try {
					const data = contactSchema.parse(req.body)

					const ipAddress = getRequestIP(req)
					if (!ipAddress) return res.status(500).json({ success: false, error: 'No IP address found' })

					const latestForm = await ContactForm.findOne({ ipAddress }).sort({ createdAt: -1 }).lean()

					if (latestForm) {
						const now = new Date()
						const latestFormDate = new Date(latestForm.createdAt)
						const diff = now.getTime() - latestFormDate.getTime()
						const diffInHours = diff / (1000 * 3600)

						if (diffInHours < 24 * 7)
							return res.status(400).json({ success: false, message: 'ניתן לשלוח טופס פעם בשבוע' })
					}

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
