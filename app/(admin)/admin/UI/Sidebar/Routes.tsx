import { TiHomeOutline, TiGroupOutline, TiMessages, TiCogOutline, TiSupport } from 'react-icons/ti'

export const PAGES: IPage[] = [
	{
		path: '',
		title: 'עמוד ראשי',
		icon: <TiHomeOutline size={18} />,
	},
	{
		path: 'forms',
		title: 'פניות',
		icon: <TiMessages size={18} />,
	},
	{
		path: 'settings',
		title: 'הגדרות משתמש',
		icon: <TiCogOutline size={18} />,
	},
	{
		path: 'support',
		title: 'תמיכה',
		icon: <TiSupport size={18} />,
	},
]

export const ADMIN_PAGES: IPage[] = [
	{
		path: 'companies',
		title: 'ניהול חברות',
		icon: <TiGroupOutline size={18} />,
	},
	{
		path: 'projects',
		title: 'ניהול פרויקטים',
		icon: <TiGroupOutline size={18} />,
	},
	{
		path: 'forms',
		title: 'ניהול פניות',
		icon: <TiMessages size={18} />,
	},
]

export interface IPage {
	path: string
	title: string
	icon: React.ReactElement
}
