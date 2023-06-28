import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context'
import { SpotlightAction } from '@mantine/spotlight'
import { PAGES, ADMIN_PAGES } from './Sidebar/Routes'
import { FaHome } from 'react-icons/fa'

const actions = (router: AppRouterInstance): SpotlightAction[] => [
	{
		title: 'דף הבית',
		description: `מעבר לדף הבית`,
		onTrigger: () => router && router.push(`/`),
		icon: <FaHome size={18} />,
	},
	...PAGES.map((page) => ({
		title: page.title,
		description: `מעבר לדף ${page.title}`,
		onTrigger: () => router && router.push(`/admin/${page.path}`),
		icon: page.icon,
	})),
	...ADMIN_PAGES.map((page) => ({
		title: page.title,
		description: `מעבר לדף ${page.title}`,
		onTrigger: () => router && router.push(`/admin/${page.path}`),
		icon: page.icon,
	})),
]

export default actions
