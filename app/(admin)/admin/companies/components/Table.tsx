'use client'

import type { ICompany } from '@/models/Company'
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
import { FaEdit, FaServer, FaTrash } from 'react-icons/fa'
import Form from './Form'
import DeleteModal from './DeleteModal'
import useCompaniesStore from '../store'

export const formatToEu = (value: number) =>
	new Date(value * 1000).toISOString().split('T')[0].split('-').reverse().join('/')

const Table = () => {
	const companies = useUserForms((state) => state.companies)
	const isLoading = useUserForms((state) => state.isLoading)

	const setModal = useCompaniesStore((state) => state.setModal)
	const setDeleteCompany = useCompaniesStore((state) => state.setDeleteCompany)

	const rows: GridRowsProp<ICompany> = companies.map((company) => ({
		...company,
		id: company._id,
		ownerName: company.user.name,
		ownerPhone: company.user.phone,
		isAdmin: company.user.isAdmin,
	}))

	const columns: GridColDef[] = [
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
					<div
						className={`rounded-full py-1 px-3 text-xs text-white ${
							value ? 'bg-orange-500' : 'bg-blue-500'
						}`}
					>
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
						>
							ניהול פרויקטים
						</Button>
						<Button
							color='red'
							variant='filled'
							size='xs'
							leftIcon={<FaTrash />}
							onClick={() => setDeleteCompany(params.row)}
						>
							מחיקת חברה
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
