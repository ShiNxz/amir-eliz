import type { NextApiRequest, NextApiResponse } from 'next'
import db from '@/utils/db'
import ContactForm from '@/utils/models/Contact'
import contactSchema from '@/utils/schemas/contact'
import limiter from '@/utils/rateLimits'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	return limiter(req, res, async () => {
		await db()
		const { method } = req

		switch (method) {
			case 'POST': {
				try {
					const data = contactSchema.parse(req.body)

					console.log('req.headers[x-real-ip]', req.headers['x-real-ip'])

					let ipAddress = req.headers['x-real-ip'] as string

					const forwardedFor = req.headers['x-forwarded-for'] as string
					if (forwardedFor) {
						const ips = forwardedFor.split(',').map((ip: string) => ip.trim())
						ipAddress = ips[0]
						console.log('ips', ips)
					} else if (req.socket.remoteAddress) {
						ipAddress = req.socket.remoteAddress
					}

					console.log('ipAddress', ipAddress)

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
