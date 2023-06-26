'use client'

import type { IProject } from '@/models/Project'
import useUserForms from '../store'
import {
	DataGrid,
	GridColDef,
	GridRowsProp,
	GridToolbarColumnsButton,
	GridToolbarContainer,
	GridToolbarDensitySelector,
	GridToolbarExport,
	GridToolbarFilterButton,
	heIL,
} from '@mui/x-data-grid'
import { Button } from '@mantine/core'
import { RxCheck, RxCross2 } from 'react-icons/rx'
import { FaEdit, FaTrash } from 'react-icons/fa'
import Form from './Form'
import DeleteModal from './DeleteModal'
import useProjectssStore from '../store'

export const formatToEu = (value: number) =>
	new Date(value * 1000).toISOString().split('T')[0].split('-').reverse().join('/')

const Table = () => {
	const projects = useUserForms((state) => state.projects)
	const isLoading = useUserForms((state) => state.isLoading)

	const setModal = useProjectssStore((state) => state.setModal)
	const setDeleteProject = useProjectssStore((state) => state.setDeleteProject)

	const rows: GridRowsProp<IProject> = projects.map((project) => ({
		...project,
		id: project._id.toString(),
	}))

	const columns: GridColDef[] = [
		{ field: 'title', headerName: 'שם הפרויקט', minWidth: 200 },
		{
			field: 'description',
			valueFormatter: ({ value }) => value.slice(0, 50),
			headerName: 'תיאור קצר',
			minWidth: 150,
		},
		{
			field: 'pinned',
			renderCell: ({ value }) => (
				<div className={`rounded-full py-1 px-3 text-xs text-white ${value ? 'bg-orange-500' : 'bg-blue-500'}`}>
					{value ? <RxCheck /> : <RxCross2 />}
				</div>
			),
			headerName: 'מוצמד',
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
							leftIcon={<FaEdit />}
							onClick={() => setModal({ open: true, project: params.row })}
						>
							עריכת פרויקט
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

	return (
		<>
			<DataGrid
				sx={{
					'&.MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
						outline: 'none !important',
					},
				}}
				autoHeight
				localeText={heIL.components.MuiDataGrid.defaultProps.localeText}
				rows={rows}
				columns={columns}
				loading={isLoading}
				autoPageSize
				slots={{
					toolbar: CustomToolbar,
				}}
			/>
			<Form />
			<DeleteModal />
		</>
	)
}

const CustomToolbar = () => {
	return (
		<GridToolbarContainer>
			<GridToolbarColumnsButton />
			<GridToolbarFilterButton />
			<GridToolbarDensitySelector />
			<GridToolbarExport />
		</GridToolbarContainer>
	)
}

export default Table
