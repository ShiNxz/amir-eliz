import { IconNotes, IconCalendarStats, IconGauge, IconHome } from '@tabler/icons-react'
import { TiGroupOutline, TiMessages } from 'react-icons/ti'
import { SiWeblate } from 'react-icons/si'

export const CLIENT_ROUTES = [
	{ label: 'עמוד ראשי', icon: IconHome, path: '/admin/' },
	{
		label: 'הפרויקטים שלי',
		icon: IconNotes,
		initiallyOpened: true,
		links: [{ label: 'ניהול פרויקטים', path: '/admin/my' }],
	},
]

export const ADMIN_ROUTES = [
	{ label: 'סטטיסטיקות', icon: IconGauge, path: '/admin/stats' },
	{
		label: 'חברות',
		icon: TiGroupOutline,
		initiallyOpened: true,
		links: [{ label: 'ניהול חברות', path: '/admin/companies' }],
	},
	{
		label: 'פרויקטים',
		icon: IconCalendarStats,
		links: [{ label: 'ניהול פרויקטים', path: '/admin/projects' }],
	},
	{
		label: 'דומיינים',
		icon: SiWeblate,
		links: [{ label: 'ניהול דומיינים', path: '/admin/domains' }],
	},
	{
		label: 'פניות',
		icon: TiMessages,
		links: [{ label: 'ניהול פניות', path: '/admin/forms' }],
	},
]
