'use client'

import type { IUser } from '@/utils/models/User'
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
import { Button } from '@mui/material'
import Link from 'next/link'
import { formatToEu } from '../../tickets/components/Table'
import { RxCheck, RxCross2 } from 'react-icons/rx'

const Table = () => {
	const users = useUserForms((state) => state.users)
	const isLoading = useUserForms((state) => state.isLoading)

	const rows: GridRowsProp<IUser> = users.map((user) => ({
		...user,
		id: user._id,
	}))

	const columns: GridColDef[] = [
		{ field: 'username', headerName: 'שם משתמש', minWidth: 220 },
		{
			field: 'email',
			headerName: 'כתובת אימייל',
			minWidth: 270,
		},
		{
			field: 'createdAt',
			headerName: 'תאריך יצירה',
			minWidth: 150,
			valueFormatter: ({ value }) => formatToEu(value),
		},
		{
			field: 'premium',
			headerName: 'חבילה',
			minWidth: 150,
			renderCell: ({ value }) => {
				return (
					<div
						className={`rounded-full py-1 px-3 text-xs text-white ${
							value ? 'bg-orange-500' : 'bg-blue-500'
						}`}
					>
						{value ? 'PREMIUM' : 'FREE'}
					</div>
				)
			},
		},
		{
			field: 'admin',
			headerName: 'אדמין',
			minWidth: 150,
			renderCell: ({ value }) => {
				return (
					<div
						className={`rounded-full py-1 px-3 text-xs text-white ${
							value ? 'bg-orange-500' : 'bg-blue-500'
						}`}
					>
						{value ? 'ADMIN' : '-'}
					</div>
				)
			},
		},
		{
			field: 'verified',
			headerName: 'מאומת',
			minWidth: 80,
			renderCell: ({ value }) => {
				return (
					<div className={`text-xl ${value ? 'text-green-500' : 'text-red-500'}`}>
						{value ? <RxCheck /> : <RxCross2 />}
					</div>
				)
			},
		},
		{
			field: 'actions',
			headerName: 'פעולות',
			minWidth: 400,
			renderCell: (params) => {
				return (
					<div className='flex flex-row gap-4'>
						<Link
							href={!params.row.page.name || !params.row.verified ? '#' : `/@${params.row.username}`}
							passHref
						>
							<Button
								color='secondary'
								variant='contained'
								size='small'
								disabled={!params.row.page.name || !params.row.verified}
							>
								מעבר לעמוד
							</Button>
						</Link>
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
				pageSizeOptions={[5, 10, 25]}
				components={{
					Toolbar: CustomToolbar,
				}}
			/>
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
