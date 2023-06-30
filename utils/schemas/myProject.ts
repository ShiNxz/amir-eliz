import { z } from 'zod'

export const myProjectPasswordSchema = z.object({
	password: z
		.string({
			invalid_type_error: 'הסיסמה צריכה להיות מסוג טקסט',
			required_error: 'הסיסמה היא שדה חובה',
		})
		.min(0)
		.max(20, { message: 'הדומיין יכול להכיל עד 20 תוים' }),
})
