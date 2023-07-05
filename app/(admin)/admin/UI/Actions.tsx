import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context'
import { SpotlightAction } from '@mantine/spotlight'
import { FaHome } from 'react-icons/fa'
import { ADMIN_ROUTES, CLIENT_ROUTES } from './Sidebar/Routes'

const actions = (router: AppRouterInstance, isAdmin: boolean): SpotlightAction[] => [
	{
		title: 'דף הבית',
		description: `מעבר לדף הבית`,
		onTrigger: () => router && router.push(`/`),
		icon: <FaHome size={18} />,
	},
	...CLIENT_ROUTES.map((route) => {
		if (route.path)
			return {
				title: route.label,
				description: `מעבר לדף ${route.label}`,
				onTrigger: () => router && router.push(route.path),
				icon: <FaHome />,
			}
		else if (route.links)
			return route.links.map((link) => ({
				title: link.label,
				description: `מעבר לדף ${link.label}`,
				onTrigger: () => router && router.push(link.path),
				icon: <FaHome />,
			}))
		else return []
	}).flat(),
	...(isAdmin
		? ADMIN_ROUTES.map((route) => {
				if (route.path)
					return {
						title: route.label,
						description: `מעבר לדף ${route.label}`,
						onTrigger: () => router && router.push(route.path),
						icon: <FaHome />,
					}
				else if (route.links)
					return route.links.map((link) => ({
						title: link.label,
						description: `מעבר לדף ${link.label}`,
						onTrigger: () => router && router.push(link.path),
						icon: <FaHome />,
					}))
				else return []
		  }).flat()
		: []),
]

export default actions
