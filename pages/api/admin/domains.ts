import type { NextApiRequest, NextApiResponse } from 'next'
import db from '@/utils/db'
import isAdminMiddleware from '@/utils/middlewares/isAdmin'
import limiter from '@/utils/rateLimits'
import Domain from '@/utils/models/Domain'
import domainSchema, { DOMAIN_PROVIDERS } from '@/utils/schemas/domain'
import Project from '@/utils/models/Project'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	return limiter(req, res, async () => {
		await db()
		const { method } = req

		const isAdmin = await isAdminMiddleware(req, res)
		if (!isAdmin) return

		switch (method) {
			case 'GET': {
				try {
					const domains = await Domain.find().lean()

					const domainsWithProviders = domains.map((domain) => {
						const provider = domain.provider
						const providerData = DOMAIN_PROVIDERS.find((p) => p.name === provider)

						if (!providerData)
							return {
								...domain,
								provider: {
									name: provider,
									url: null,
								},
							}

						return {
							...domain,
							provider: providerData,
						}
					})

					return res.status(200).json({ success: true, domains: domainsWithProviders })
				} catch (error) {
					return res.status(500).json({ success: false, error })
				}
			}

			case 'POST': {
				try {
					const data = domainSchema.parse({ ...req.body, expDate: new Date(req.body.expDate || '') })
					const normalizedDomain = data.domain.replace(/^https?:\/\//, '')

					const domain = await Domain.create({ ...data, domain: normalizedDomain })

					return res.status(200).json({ success: true, domain })
				} catch (error) {
					console.log(error)
					return res.status(500).json({ success: false, error })
				}
			}

			case 'PUT': {
				try {
					const data = domainSchema.parse({ ...req.body, expDate: new Date(req.body.expDate || '') })
					const normalizedDomain = data.domain.replace(/^https?:\/\//, '')

					const domain = await Domain.findByIdAndUpdate(
						req.body.id,
						{ ...data, domain: normalizedDomain },
						{
							new: true,
						}
					)

					if (!domain) return res.status(404).json({ success: false, error: 'הדומיין אינו קיים' })

					return res.status(200).json({ success: true, domain })
				} catch (error) {
					console.log(error)
					return res.status(500).json({ success: false, error })
				}
			}

			case 'DELETE': {
				try {
					const { id } = req.query
					if (!id) return res.status(400).json({ success: false, error: 'לא נשלח קוד' })

					const domain = await Domain.findById(id)
					if (!domain) return res.status(404).json({ success: false, error: 'הדומיין לא נמצא' })

					// check if the domain connected to a project
					const project = await Project.findOne({ connected_domain: domain._id })
					if (project) return res.status(400).json({ success: false, message: 'הדומיין משויך לפרויקט!' })

					await domain.deleteOne()

					return res.status(200).json({ success: true, domain })
				} catch (error) {
					console.log(error)
					return res.status(500).json({ success: false, error })
				}
			}

			default:
				return res.status(401).end()
		}
	})
}

export default handler
