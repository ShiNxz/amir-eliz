const Stats: IStats[] = [
	{
		title: 'פרוייקטים',
		value: 50,
		style: 'from-sky-500 to-indigo-500',
	},
	{
		title: 'שנות ניסיון',
		value: 5,
		style: 'from-purple-500 to-indigo-500',
	},
	{
		title: 'טכנולוגיות',
		value: 20,
		style: 'from-pink-500 to-purple-500',
	},
	{
		title: 'טכנולוגיות',
		value: 20,
		style: 'from-red-500 to-orange-500',
	},
	{
		title: 'טכנולוגיות',
		value: 20,
		style: 'from-orange-500 to-yellow-500',
	},
]

export interface IStats {
	title: string
	value: number
	style: string
}

export default Stats
