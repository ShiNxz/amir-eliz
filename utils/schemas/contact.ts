import { z } from 'zod'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRegex = /^\d{10}$/

const contactSchema = z.object({
	name: z
		.string({
			invalid_type_error: 'השם צריך להיות מסוג טקסט',
			required_error: 'השם הוא שדה חובה',
		})
		.min(3, { message: 'השם צריך להכיל יותר מ-3 תוים' })
		.max(50, { message: 'השם יכול להכיל עד 50 תוים' }),
	identifier: z
		.string({
			invalid_type_error: 'התיאור צריך להיות מסוג טקסט',
			required_error: 'התיאור הוא שדה חובה',
		})
		.refine((value) => emailRegex.test(value) || phoneRegex.test(value), {
			message: 'מספר הטלפון / כתובת האימייל אינם תקינים',
		}),
	topic: z
		.string({
			invalid_type_error: 'הנושא צריך להיות מסוג טקסט',
			required_error: 'הנושא הוא שדה חובה',
		})
		.min(3, {
			message: 'הנושא צריך להכיל יותר מ-3 תוים',
		})
		.max(50, {
			message: 'הנושא יכול להכיל עד 50 תוים',
		}),
	message: z
		.string({
			invalid_type_error: 'ההודעה צריכה להיות מסוג טקסט',
		})
		.min(10, {
			message: 'ההודעה צריכה להכיל יותר מ-10 תוים',
		})
		.max(50000, {
			message: 'ההודעה יכולה להכיל עד 50000 תוים',
		})
		.optional(),
})

export default contactSchema
