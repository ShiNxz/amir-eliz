import type { GridColDef } from '@mui/x-data-grid'
import type { Domain } from '@/utils/models/Domain'
import { Button } from '@mantine/core'
import { FaCog, FaEdit, FaTrash } from 'react-icons/fa'
import Link from 'next/link'

const formatToEu = (value: number) => new Date(value * 1000).toISOString().split('T')[0].split('-').reverse().join('/')

const Columns = (setModal: TSetModal, setDelete: TSetDelete): GridColDef[] => [
	{ field: 'domain', headerName: 'דומיין', minWidth: 200 },
	{
		field: 'provider',
		valueFormatter: ({ value }) => value.name, // -> provider.name || provider
		headerName: 'ספק',
		minWidth: 150,
	},
	{
		field: 'createdAt',
		headerName: 'תאריך יצירה',
		minWidth: 150,
		valueFormatter: ({ value }) => value && formatToEu(value),
	},
	{
		field: 'expDate',
		valueFormatter: ({ value }) => {
			const date = new Date(value)
			const diff = date.getTime() - Date.now()
			const days = diff / (1000 * 3600 * 24)

			console.log(date.getTime(), date)

			if (days < 0) return `${formatToEu(date.getTime() / 1000)} (פג תוקף)`
			return `${days.toFixed(0)} ימים (${formatToEu(date.getTime() / 1000)})`
		},
		headerName: 'חידוש בעוד',
		minWidth: 250,
	},
	{
		field: 'actions',
		headerName: 'פעולות',
		minWidth: 500,
		renderCell: (params) => {
			return (
				<div className='flex flex-row gap-4'>
					<Button
						color='dark'
						size='xs'
						variant='outline'
						leftIcon={<FaEdit />}
						onClick={() => setModal({ open: true, domain: params.row })}
					>
						עריכת דומיין
					</Button>
					<Link
						href={
							params.row.provider.url
								? params.row.provider.url.replace('{{domain}}', params.row.domain)
								: ''
						}
						passHref
						target='_blank'
					>
						<Button
							color='dark'
							size='xs'
							leftIcon={<FaCog />}
							disabled={!params.row.provider.url}
						>
							ניהול דומיין / חידוש
						</Button>
					</Link>
					<Button
						color='red'
						variant='filled'
						size='xs'
						leftIcon={<FaTrash />}
						onClick={() => setDelete(params.row)}
					>
						מחיקת דומיין
					</Button>
				</div>
			)
		},
	},
]

type TSetModal = (modal: { domain: Domain | null; open: boolean }) => void
type TSetDelete = (domain: Domain) => void

export default Columns
