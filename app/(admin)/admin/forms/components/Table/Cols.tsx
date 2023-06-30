import type { GridColDef } from '@mui/x-data-grid'
import { modals } from '@mantine/modals'
import { Button, Text } from '@mantine/core'
import { FaEvernote } from 'react-icons/fa'

const formatToEu = (value: number) => new Date(value * 1000).toISOString().split('T')[0].split('-').reverse().join('/')

const Columns = (): GridColDef[] => [
	{
		field: 'name',
		headerName: 'שם',
		minWidth: 300,
	},
	{
		field: 'identifier',
		headerName: 'אמצעי תקשורת',
		minWidth: 200,
	},
	{
		field: 'topic',
		headerName: 'נושא',
		minWidth: 150,
	},
	{
		field: 'createdAt',
		headerName: 'נוצר בתאריך',
		minWidth: 150,
		valueFormatter: ({ value }) => formatToEu(value as number),
	},
	{
		field: 'message',
		headerName: 'הודעה',
		minWidth: 300,
		valueFormatter: ({ value }) => (value as string).slice(0, 50),
	},
	{
		field: 'actions',
		headerName: 'פעולות',
		minWidth: 150,
		renderCell: (params) => (
			<Button
				color='dark'
				size='xs'
				leftIcon={<FaEvernote />}
				onClick={() => openMessage(params.row.name, params.row.message)}
			>
				קרא עוד
			</Button>
		),
	},
]

export const openMessage = (title: string, text: string) =>
	modals.open({
		title,
		children: <Text size='sm'>{text}</Text>,
	})

export default Columns
