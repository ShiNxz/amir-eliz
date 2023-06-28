import type { GridColDef } from '@mui/x-data-grid'
import type { IAuthUser } from '@/pages/api/auth'
import type { ICompany } from '@/utils/models/Company'
import { Button } from '@mantine/core'
import { RxCheck, RxCross2 } from 'react-icons/rx'
import { FaEdit, FaServer, FaTrash } from 'react-icons/fa'

const formatToEu = (value: number) => new Date(value * 1000).toISOString().split('T')[0].split('-').reverse().join('/')

const Columns = (
	setModal: TSetModal,
	setDelete: TSetDelete,
	user: IAuthUser,
	setProjectModal: TSetProjectsModal
): GridColDef[] => [
	{ field: 'name', headerName: 'שם החברה', minWidth: 200 },
	{
		field: 'projects',
		valueFormatter: ({ value }) => value.length,
		headerName: 'מספר פרויקטים',
		minWidth: 150,
	},
	{
		field: 'ownerName',
		headerName: 'שם לקוח',
		minWidth: 150,
	},
	{
		field: 'ownerPhone',
		headerName: 'טלפון לקוח',
		minWidth: 150,
	},
	{
		field: 'isAdmin',
		headerName: 'אדמין',
		minWidth: 100,
		renderCell: ({ value }) => {
			return (
				<div className={`rounded-full py-1 px-3 text-xs text-white ${value ? 'bg-orange-500' : 'bg-blue-500'}`}>
					{value ? <RxCheck /> : <RxCross2 />}
				</div>
			)
		},
	},
	{
		field: 'createdAt',
		headerName: 'תאריך יצירה',
		minWidth: 180,
		valueFormatter: ({ value }) => value && formatToEu(value),
	},
	{
		field: 'actions',
		headerName: 'פעולות',
		minWidth: 400,
		renderCell: (params) => {
			return (
				<div className='flex flex-row gap-4'>
					<Button
						color='dark'
						size='xs'
						variant='outline'
						leftIcon={<FaEdit />}
						onClick={() => setModal({ open: true, company: params.row })}
					>
						עריכת חברה
					</Button>
					<Button
						color='dark'
						variant='filled'
						size='xs'
						leftIcon={<FaServer />}
						onClick={() => setProjectModal({ open: true, company: params.row })}
					>
						ניהול פרויקטים
					</Button>
					<Button
						color='red'
						variant='filled'
						size='xs'
						leftIcon={<FaTrash />}
						onClick={() => setDelete(params.row)}
						disabled={user._id === params.row._id}
					>
						מחיקת חברה
					</Button>
				</div>
			)
		},
	},
]

type TSetModal = (modal: { company: ICompany | null; open: boolean }) => void
type TSetProjectsModal = (modal: { company: ICompany | null; open: boolean }) => void
type TSetDelete = (company: ICompany) => void

export default Columns
