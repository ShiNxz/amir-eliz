import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: '/panel/',
		},
		sitemap: `https://${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/sitemap.xml`,
	}
}
