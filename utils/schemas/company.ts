import { z } from 'zod'
import validator from 'validator'

const companySchema = z.object({
	name: z
		.string({
			invalid_type_error: 'השם צריך להיות מסוג טקסט',
			required_error: 'השם הוא שדה חובה',
		})
		.min(3, { message: 'השם צריך להכיל יותר מ-3 תוים' })
		.max(50, { message: 'השם יכול להכיל עד 50 תוים' }),
	user: z.object({
		name: z
			.string({
				invalid_type_error: 'השם צריך להיות מסוג טקסט',
				required_error: 'השם הוא שדה חובה',
			})
			.min(3, { message: 'השם צריך להכיל יותר מ-3 תוים' })
			.max(50, { message: 'השם יכול להכיל עד 50 תוים' }),
		phone: z
			.string({
				invalid_type_error: 'הטלפון צריך להיות מסוג טקסט',
				required_error: 'הטלפון הוא שדה חובה',
			})
			.min(10, {
				message: 'מספר הטלפון צריך להכיל 10 ספרות',
			})
			.max(10, {
				message: 'מספר הטלפון צריך להכיל 10 ספרות',
			})
			.refine(validator.isMobilePhone, {
				message: 'מספר הטלפון אינו תקין',
			}),
		isAdmin: z.boolean({
			invalid_type_error: 'הסטטוס צריך להיות מסוג בוליאני',
			required_error: 'הסטטוס הוא שדה חובה',
		}),
	}),
})

export default companySchema
