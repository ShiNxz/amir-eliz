import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: `https://${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}`,
			lastModified: new Date(),
		},
		{
			url: `https://${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/projects`,
			lastModified: new Date(),
		},
		{
			url: `https://${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/contact`,
			lastModified: new Date(),
		},
	]
}
