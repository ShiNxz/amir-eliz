import { z } from 'zod'

const projectSchema = z.object({
	title: z
		.string({
			invalid_type_error: 'הכותרת צריכה להיות מסוג טקסט',
			required_error: 'הכותרת היא שדה חובה',
		})
		.min(3, { message: 'הכותרת צריכה להכיל יותר מ-3 תוים' })
		.max(50, { message: 'הכותרת יכולה להכיל עד 50 תוים' }),
	description: z
		.string({
			invalid_type_error: 'התיאור צריך להיות מסוג טקסט',
			required_error: 'התיאור הוא שדה חובה',
		})
		.min(3, { message: 'התיאור צריך להכיל יותר מ-3 תוים' })
		.max(500, {
			message: 'התיאור יכול להכיל עד 500 תוים',
		}),
	image: z
		.string({
			invalid_type_error: 'התמונה צריכה להיות מסוג טקסט',
			required_error: 'התמונה היא שדה חובה',
		})
		.min(3, {
			message: 'התמונה צריכה להכיל יותר מ-3 תוים',
		})
		.max(500, {
			message: 'התמונה יכולה להכיל עד 500 תוים',
		}),
	pinned: z.boolean(),
	type: z
		.string({
			invalid_type_error: 'הסוג צריך להיות מסוג טקסט',
			required_error: 'הסוג הוא שדה חובה',
		})
		.min(3, {
			message: 'הסוג צריך להכיל יותר מ-3 תוים',
		})
		.max(50, {
			message: 'הסוג יכול להכיל עד 50 תוים',
		}),
	techs: z
		.string({
			invalid_type_error: 'הטכנולוגיות צריכות להיות מסוג טקסט',
			required_error: 'הטכנולוגיות הן שדה חובה',
		})
		.min(3, {
			message: 'הטכנולוגיות צריכות להכיל יותר מ-3 תוים',
		})
		.max(50, {
			message: 'הטכנולוגיות יכולות להכיל עד 50 תוים',
		}),
	repository: z
		.string({
			invalid_type_error: 'הקישור לקוד צריך להיות מסוג טקסט',
		})
		.max(500, {
			message: 'הקישור לקוד יכול להכיל עד 500 תוים',
		})
		.optional(),
	website: z
		.string({
			invalid_type_error: 'הקישור לאתר צריך להיות מסוג טקסט',
		})
		.max(500, {
			message: 'הקישור לאתר יכול להכיל עד 500 תוים',
		})
		.optional(),
})

export default projectSchema
