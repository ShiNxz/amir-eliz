'use client'

const CheckInput = (key: string, value: string) => {
	switch (key) {
		case 'name': {
			const status = value.length > 2 ? 1 : 0
			const error = status ? null : 'שם פרטי חייב להכיל לפחות 3 תווים'

			return { value, status, error }
		}

		case 'email': {
			const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
			const status = emailRegex.test(value) ? 1 : 0
			const error = status ? null : 'כתובת האימייל אינה תקינה'

			return { value, status, error }
		}

		case 'message': {
			const status = value.length > 10 ? 1 : 0
			const error = status ? null : 'הודעה חייבת להכיל לפחות 10 תווים'

			return { value, status, error }
		}

		default:
			return { value, status: 1, error: null }
	}
}

export default CheckInput
