import type { GridColDef } from '@mui/x-data-grid'
import type { IProject } from '@/utils/models/Project'
import { Button } from '@mantine/core'
import { RxCheck, RxCross2 } from 'react-icons/rx'
import { FaEdit, FaTrash, FaUserEdit } from 'react-icons/fa'
import Link from 'next/link'

const formatToEu = (value: number) => new Date(value * 1000).toISOString().split('T')[0].split('-').reverse().join('/')

const Columns = (
	setModal: TSetModal,
	setDeleteProject: TDeleteProject,
	setModalContent: TSetModalContent
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
		field: 'companies',
		headerName: 'חברות',
		minWidth: 200,
		renderCell: ({
			row: { companies },
		}: {
			row: {
				companies: {
					name: string
					_id: string
				}[]
			}
		}) => {
			companies = companies || []

			return companies.map((c) => c.name).join(', ')

			// return companies.map((company) => (
			// 	<Link
			// 		key={company._id}
			// 		href={'/companies/' + company._id}
			// 		target='_blank'
			// 	>
			// 		{company.name}
			// 	</Link>
			// ))
		},
	},
	{
		field: 'pinned',
		renderCell: ({ value }) => (
			<div className={`rounded-full py-1 px-3 text-xs text-white ${value ? 'bg-orange-500' : 'bg-blue-500'}`}>
				{value ? <RxCheck /> : <RxCross2 />}
			</div>
		),
		headerName: 'מוצג באתר',
		minWidth: 150,
	},
	{
		field: 'type',
		headerName: 'סוג פיתוח',
		minWidth: 150,
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
						leftIcon={<FaUserEdit />}
						onClick={() => setModal({ open: true, project: params.row })}
					>
						עריכת פרויקט
					</Button>
					<Button
						color='dark'
						size='xs'
						variant='filled'
						leftIcon={<FaEdit />}
						onClick={() => setModalContent({ open: true, project: params.row })}
						disabled={!params.row.pinned}
					>
						עריכת תוכן
					</Button>
					<Button
						color='red'
						variant='filled'
						size='xs'
						leftIcon={<FaTrash />}
						onClick={() => setDeleteProject(params.row)}
					>
						מחיקת פרויקט
					</Button>
				</div>
			)
		},
	},
]

type TSetModal = (modal: { project: IProject | null; open: boolean }) => void
type TDeleteProject = (project: IProject) => void
type TSetModalContent = (modalContent: { project: IProject | null; open: boolean }) => void

export default Columns
