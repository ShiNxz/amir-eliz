import { TiHomeOutline, TiGroupOutline, TiMessages } from 'react-icons/ti'
import { SiWeblate } from 'react-icons/si'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'

export const PAGES: IPage[] = [
	{
		path: '',
		title: 'עמוד ראשי',
		icon: <TiHomeOutline size={18} />,
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
		icon: <AiOutlineFundProjectionScreen size={18} />,
	},
	{
		path: 'domains',
		title: 'ניהול דומיינים',
		icon: <SiWeblate size={18} />,
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
