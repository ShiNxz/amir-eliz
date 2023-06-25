const Trusted: ITrusted[] = [
	{
		name: 'אלעד בן שושן',
		avatar: 'https://www.icoupons.co.il/wp-content/uploads/2022/11/%D7%94%D7%9E%D7%9C%D7%A7%D7%98.jpg',
		text: 'אמיר פיתח לי מערכת ניהול מתקדמת לניהול העסק שלי המכילה את כל הכלים והתכונות שאני צריך בתוך מספר שבועות, אני מרוצה מאוד מהשירות והתוצאות שקיבלתי וממליץ עליו בחום.',
		company: 'המלקט',
	},
	{
		name: 'אלכס גולד',
		avatar: 'https://media.licdn.com/dms/image/D4D03AQHxinFg3Cmc7w/profile-displayphoto-shrink_800_800/0/1685229876479?e=2147483647&v=beta&t=fBfoSV0eP5oDLs0r14mGdHsz9bJTwOa8j7IA1bt81CU',
		text: 'שכרתי את אמיר למספר פרויקטים שניהלתי בשנים האחרונות, יש לו ידע רחב ומקצועי בפיתוח אתרים והוא משתף פעולה בצורה יעילה ויכול להתאים את עצמו לדרישות הפרויקט בצורה מקצועית.',
		company: 'VoxByte',
	},
]

interface ITrusted {
	name: string
	avatar: string
	text: string
	company: string
}

export default Trusted
