import { useState } from 'react'
import { Group, Box, Collapse, ThemeIcon, Text, UnstyledButton, createStyles, rem } from '@mantine/core'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
	control: {
		'fontWeight': 500,
		'display': 'block',
		'width': '100%',
		'padding': `${theme.spacing.xs} ${theme.spacing.md}`,
		'color': theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
		'fontSize': theme.fontSizes.sm,

		'&:hover': {
			backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
			color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		},
	},

	link: {
		'fontWeight': 500,
		'display': 'block',
		'textDecoration': 'none',
		'padding': `${theme.spacing.xs} ${theme.spacing.md}`,
		'paddingLeft': rem(31),
		'marginLeft': rem(30),
		'fontSize': theme.fontSizes.sm,
		'color': theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
		'borderLeft': `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,

		'&:hover': {
			backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
			color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		},
	},

	chevron: {
		transition: 'transform 200ms ease',
	},
}))

interface LinksGroupProps {
	icon: React.FC<any>
	label: string
	path?: string
	initiallyOpened?: boolean
	links?: { label: string; path: string }[]
	closeSidebar?: () => void
}

const LinksGroup = ({ icon: Icon, path, label, initiallyOpened, links, closeSidebar }: LinksGroupProps) => {
	const { classes, theme } = useStyles()
	const hasLinks = Array.isArray(links)
	const [opened, setOpened] = useState(initiallyOpened || false)
	const ChevronIcon = theme.dir === 'ltr' ? IconChevronRight : IconChevronLeft

	const items = (hasLinks ? links : []).map((link) => (
		<Link
			href={link.path}
			passHref
			key={link.label}
			onClick={closeSidebar}
		>
			<Text className={classes.link}>{link.label}</Text>
		</Link>
	))

	if (path) {
		return (
			<Link
				href={path}
				onClick={closeSidebar}
			>
				<UnstyledButton
					onClick={() => setOpened((o) => !o)}
					className={classes.control}
				>
					<Group
						position='apart'
						spacing={0}
					>
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							<ThemeIcon
								variant='light'
								size={30}
							>
								<Icon size='1.1rem' />
							</ThemeIcon>
							<Box ml='md'>{label}</Box>
						</Box>
						{hasLinks && (
							<ChevronIcon
								className={classes.chevron}
								size='1rem'
								stroke={1.5}
								style={{
									transform: opened ? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)` : 'none',
								}}
							/>
						)}
					</Group>
				</UnstyledButton>
				{hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
			</Link>
		)
	}

	return (
		<>
			<UnstyledButton
				onClick={() => setOpened((o) => !o)}
				className={classes.control}
			>
				<Group
					position='apart'
					spacing={0}
				>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<ThemeIcon
							variant='light'
							size={30}
						>
							<Icon size='1.1rem' />
						</ThemeIcon>
						<Box ml='md'>{label}</Box>
					</Box>
					{hasLinks && (
						<ChevronIcon
							className={classes.chevron}
							size='1rem'
							stroke={1.5}
							style={{
								transform: opened ? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)` : 'none',
							}}
						/>
					)}
				</Group>
			</UnstyledButton>
			{hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
		</>
	)
}

export default LinksGroup
