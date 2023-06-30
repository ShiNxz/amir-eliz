import type { GridColDef } from '@mui/x-data-grid'
import { ActionIcon, Button, Tooltip } from '@mantine/core'
import { FaLock, FaPause, FaPlay, FaStop } from 'react-icons/fa'
import Link from 'next/link'
import { IProject, TStatus } from '@/utils/models/Project'
import axios from 'axios'
import notification, { updateNotification } from '@/utils/functions/notification'
import { mutate } from 'swr'

const formatToEu = (value: number) => new Date(value * 1000).toISOString().split('T')[0].split('-').reverse().join('/')

const Columns = (
	setPasswordModal: (passwordModal: { open: boolean; project: IProject | null }) => void
): GridColDef[] => [
	{
		field: 'title',
		headerName: 'שם הפרויקט',
		minWidth: 300,
		renderCell: (params) => (
			<Link
				href={'/projects/' + params.row._id}
				target='_blank'
			>
				{params.row.title}
			</Link>
		),
	},
	{
		field: 'website',
		headerName: 'כתובת אתר',
		minWidth: 200,
		renderCell: ({ value }) => <Link href={value}>{value}</Link>,
	},
	{
		field: 'type',
		headerName: 'סוג פיתוח',
		minWidth: 180,
	},
	{
		field: 'status',
		headerName: 'סטטוס אתר',
		minWidth: 200,
		valueFormatter: ({ value }) => `${value}`,
	},
	{
		field: 'createdAt',
		headerName: 'תאריך יצירה',
		minWidth: 150,
		valueFormatter: ({ value }) => value && formatToEu(value),
	},
	{
		field: 'actions',
		headerName: 'פעולות',
		minWidth: 400,
		renderCell: (params) => {
			const ChangeStatus = async (newStatus: TStatus) => {
				try {
					notification(params.row.title, params.row.title, 'אנא המתן לשינוי הסטטוס...')

					await axios({
						url: '/api/admin/my',
						method: 'PUT',
						data: {
							id: params.row._id,
							status: newStatus,
						},
					})

					await mutate('/api/admin/my')

					updateNotification(params.row.title, params.row.title, 'סטטוס האתר שונה בהצלחה!')
				} catch (error) {
					console.log('error', error)
					updateNotification(params.row.title, params.row.title, 'חלה שגיאה במהלך שינוי הסטטוס!', 'error')
				}
			}

			return (
				<div className='flex flex-row gap-4'>
					<Tooltip
						label='הדלקת אתר'
						color='teal'
					>
						<ActionIcon
							color='teal'
							variant={params.row.status === 'ONLINE' ? 'filled' : 'outline'}
							onClick={() => (params.row.status === 'ONLINE' ? undefined : ChangeStatus('ONLINE'))}
						>
							<FaPlay size='0.7rem' />
						</ActionIcon>
					</Tooltip>

					<Tooltip label='כיבוי אתר'>
						<ActionIcon
							color='red'
							variant={params.row.status === 'OFFLINE' ? 'filled' : 'outline'}
							onClick={() => (params.row.status === 'OFFLINE' ? undefined : ChangeStatus('OFFLINE'))}
						>
							<FaPause size='0.7rem' />
						</ActionIcon>
					</Tooltip>

					<Tooltip label='מעבר למצב תחזוקה'>
						<ActionIcon
							color='orange'
							variant={params.row.status === 'MAINTENANCE' ? 'filled' : 'outline'}
							onClick={() =>
								params.row.status === 'MAINTENANCE' ? undefined : ChangeStatus('MAINTENANCE')
							}
						>
							<FaStop size='0.7rem' />
						</ActionIcon>
					</Tooltip>

					<Button
						color='dark'
						size='xs'
						variant='filled'
						leftIcon={<FaLock />}
						onClick={() => setPasswordModal({ open: true, project: params.row })}
					>
						עריכת סיסמה
					</Button>
				</div>
			)
		},
	},
]

export default Columns
