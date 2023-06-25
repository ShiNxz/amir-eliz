'use client'

import type { IContact } from '@/utils/models/ContactForm'
import { RiEdit2Line, RiUser3Line } from 'react-icons/ri'
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
import { useState } from 'react'
import FormModal from './FormModal'
import FormStatuses from '@/utils/data/ContactForms/FormStatus'

export const formatToEu = (value: number) =>
	new Date(value * 1000).toISOString().split('T')[0].split('-').reverse().join('/')

const Table = () => {
	const forms = useUserForms((state) => state.forms)
	const isLoading = useUserForms((state) => state.isLoading)

	const rows: GridRowsProp<IContact> = forms.map((form) => ({
		...form,
		id: form._id,
		personName: form.name,
	}))

	const [state, setState] = useState<IState>({
		form: null,
		state: null,
	})

	interface IState {
		form: IContact | null
		state: 'EDIT' | 'WATCH' | null
	}

	const columns: GridColDef[] = [
		{ field: 'personName', headerName: 'שם', minWidth: 170 },
		{ field: 'email', headerName: 'כתובת אימייל', minWidth: 300 },
		{
			field: 'status',
			headerName: 'סטטוס',
			minWidth: 150,
			renderCell: (params) => {
				const statusType = FormStatuses[params.value]
				return statusType ? (
					<div className={`rounded-full py-1 px-3 text-xs ${statusType.style}`}>{statusType.label}</div>
				) : null
			},
		},
		{
			field: 'createdAt',
			headerName: 'תאריך יצירה',
			minWidth: 200,
			valueFormatter: ({ value }) => formatToEu(value),
		},
		{
			field: 'updatedAt',
			headerName: 'עדכון אחרון',
			minWidth: 200,
			valueFormatter: ({ value }) => formatToEu(value),
		},
		{
			field: 'actions',
			headerName: 'פעולות',
			minWidth: 400,
			renderCell: (params) => {
				return (
					<div className='flex flex-row gap-4'>
						<Button
							color='secondary'
							variant='contained'
							size='small'
							onClick={() =>
								setState({
									form: params.row,
									state: 'WATCH',
								})
							}
						>
							<RiUser3Line className='ml-1' />
							צפייה בפרטים
						</Button>
						<Button
							color='primary'
							variant='contained'
							size='small'
							onClick={() =>
								setState({
									form: params.row,
									state: 'EDIT',
								})
							}
						>
							<RiEdit2Line className='ml-1' />
							שינוי סטטוס
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
				pageSizeOptions={[5, 10, 25]}
				components={{
					Toolbar: CustomToolbar,
				}}
			/>
			<FormModal
				open={!!state.form}
				form={state.form}
				state={state.state}
				handleClose={() =>
					setState({
						form: null,
						state: null,
					})
				}
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
