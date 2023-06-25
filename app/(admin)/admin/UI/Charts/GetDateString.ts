const getLastXDays = (numDays: number) => {
	const startDate = new Date()
	const days = []

	for (let i = 0; i < numDays; i++) {
		const date = new Date(startDate.getTime() - i * 24 * 60 * 60 * 1000)
		const formattedDate = date.toISOString().slice(0, 10)
		days.push(formattedDate)
	}

	return days.reverse()
}

export default getLastXDays
