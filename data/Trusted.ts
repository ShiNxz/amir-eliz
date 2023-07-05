import eladbs from '@/public/companies/eladbs.webp'
import alexg from '@/public/companies/alexg.webp'

const Trusted: ITrusted[] = [
	{
		name: 'אלעד בן שושן',
		avatar: eladbs.src,
		text: 'אמיר פיתח לי מערכת ניהול מתקדמת לניהול העסק שלי המכילה את כל הכלים והתכונות שאני צריך בתוך מספר שבועות, אני מרוצה מאוד מהשירות והתוצאות שקיבלתי וממליץ עליו בחום.',
		company: 'המלקט',
	},
	{
		name: 'אלכס גולד',
		avatar: alexg.src,
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
