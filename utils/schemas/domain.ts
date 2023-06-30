import { z } from 'zod'

export const DOMAIN_PROVIDERS: DomainProvider[] = [
	{
		name: 'GoDaddy',
		url: 'https://dcc.godaddy.com/manage/{{domain}}/dns',
	},
	{
		name: 'NameCheap',
		url: 'https://ap.www.namecheap.com/domains/domaincontrolpanel/{{domain}}/domain',
	},
	{
		name: 'MyNames',
		url: 'https://dash.mynames.co.il/domains',
	},
]

export interface DomainProvider {
	name: string
	url: string
}

const isDomain = (value: string) => {
	const normalizedValue = value.replace(/^https?:\/\//, '')
	const domainRegex = /^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/
	return domainRegex.test(normalizedValue)
}

const domainSchema = z.object({
	domain: z
		.string({
			invalid_type_error: 'הדומיין צריך להיות מסוג טקסט',
			required_error: 'הדומיין הוא שדה חובה',
		})
		.min(3, { message: 'הדומיין צריך להכיל יותר מ-3 תוים' })
		.max(50, { message: 'הדומיין יכול להכיל עד 50 תוים' })
		.refine(isDomain, {
			message: 'הדומיין אינו תקין',
		}),
	provider: z
		.string({
			invalid_type_error: 'הספק צריך להיות מסוג טקסט',
			required_error: 'הספק הוא שדה חובה',
		})
		.min(3, { message: 'הספק צריך להכיל יותר מ-3 תוים' })
		.max(50, { message: 'הספק יכול להכיל עד 50 תוים' }),
	expDate: z.date({
		invalid_type_error: 'תאריך התפוגה צריך להיות מסוג תאריך',
		required_error: 'תאריך התפוגה הוא שדה חובה',
	}),
})

export default domainSchema
