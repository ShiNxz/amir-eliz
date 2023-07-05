'use client'

import { Navbar, Group, Code, ScrollArea, SegmentedControl } from '@mantine/core'
import { ADMIN_ROUTES, CLIENT_ROUTES } from './Routes'
import LinksGroup from './LinksGroup'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import User from '../Navbar/User'
import useStyles from './styles'
import { Burger } from '@mantine/core'
import { useDisclosure, useViewportSize } from '@mantine/hooks'
import useAuth from '@/utils/hooks/useAuth'

const SideBar = () => {
	const { width } = useViewportSize()
	const [opened, { toggle, open }] = useDisclosure(false)
	const [view, setView] = useState<'CLIENT' | 'ADMIN'>('CLIENT')
	const { user } = useAuth()
	const isAdmin = !!user?.user.isAdmin

	useEffect(() => {
		if (!opened && width > 768) {
			open()
		}
	}, [width])

	const { classes } = useStyles()
	const links = (view === 'CLIENT' ? CLIENT_ROUTES : isAdmin ? ADMIN_ROUTES : []).map((item) => (
		<LinksGroup
			{...item}
			key={item.label}
		/>
	))

	return (
		<Navbar
			width={{ sm: 300 }}
			p='md'
			h='100vh'
			className={`md:!static !fixed ${classes.navbar} ${opened ? 'h-full' : '!h-fit'} !top-0 !bottom-[unset]`}
		>
			<Navbar.Section className={classes.header}>
				<Group position='apart'>
					<Link
						href='/'
						className='text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 font-bold text-lg'
					>
						{process.env.NEXT_PUBLIC_WEBSITE_NAME}
					</Link>
					<Code
						className='md:block hidden'
						sx={{ fontWeight: 700 }}
					>
						v{process.env.NEXT_PUBLIC_VERSION || '0.0.0'}
					</Code>
					<Burger
						className='block md:hidden'
						opened={opened}
						onClick={toggle}
						aria-label='פתיחת תפריט'
					/>
				</Group>
			</Navbar.Section>
			{opened ? (
				<>
					{isAdmin && (
						<Navbar.Section className={`${opened ? '' : ''} ${classes.view}`}>
							<SegmentedControl
								value={view}
								onChange={(value: 'CLIENT' | 'ADMIN') => setView(value)}
								transitionTimingFunction='ease'
								fullWidth
								data={[
									{ label: 'לקוח', value: 'CLIENT' },
									{ label: 'אדמין', value: 'ADMIN' },
								]}
							/>
						</Navbar.Section>
					)}

					<Navbar.Section
						grow
						className={classes.links}
						component={ScrollArea}
					>
						{links}
					</Navbar.Section>

					<Navbar.Section className={classes.footer}>
						<User />
					</Navbar.Section>
				</>
			) : (
				<></>
			)}
		</Navbar>
	)
}

export default SideBar
