import { createStyles, rem } from '@mantine/core'

const useStyles = createStyles((theme) => ({
	navbar: {
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
		paddingBottom: '0 !important',
		height: '100%',
	},

	header: {
		padding: theme.spacing.md,
		paddingTop: 0,
		marginLeft: `calc(${theme.spacing.md} * -1)`,
		marginRight: `calc(${theme.spacing.md} * -1)`,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
		height: '4rem',
	},

	view: {
		padding: `${theme.spacing.md} 0`,
	},

	links: {
		marginLeft: `calc(${theme.spacing.md} * -1)`,
		marginRight: `calc(${theme.spacing.md} * -1)`,
	},

	linksInner: {
		paddingTop: theme.spacing.xl,
		paddingBottom: theme.spacing.xl,
	},

	footer: {
		marginLeft: `calc(${theme.spacing.md} * -1)`,
		marginRight: `calc(${theme.spacing.md} * -1)`,
		borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
	},
}))

export default useStyles
