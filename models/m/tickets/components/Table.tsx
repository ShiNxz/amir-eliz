'use client'

import type { IContact } from '@/utils/models/ContactForm'
import { RiEdit2Line } from 'react-icons/ri'
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
import { TiMessages } from 'react-icons/ti'
import Link from 'next/link'

export const formatToEu = (value: number) =>
	new Date(value * 1000).toISOString().split('T')[0].split('-').reverse().join('/')

const Table = () => {
	const tickets = useUserForms((state) => state.tickets)
	const isLoading = useUserForms((state) => state.isLoading)

	const rows: GridRowsProp<IContact> = tickets.map((ticket) => ({
		...ticket,
		id: ticket._id,
		personName: ticket.name,
	}))

	const [state, setState] = useState<IState>({
		ticket: null,
		state: null,
	})

	interface IState {
		ticket: IContact | null
		state: 'EDIT' | 'WATCH' | null
	}

	const columns: GridColDef[] = [
		{ field: 'topic', headerName: 'נושא', minWidth: 250 },
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
			field: 'messages',
			headerName: 'הודעות',
			minWidth: 200,
			valueFormatter: ({ value }) => value.length,
		},
		{
			field: 'actions',
			headerName: 'פעולות',
			minWidth: 400,
			renderCell: (params) => {
				return (
					<div className='flex flex-row gap-4'>
						<Link
							href={`/admin/m/tickets/${params.row._id}`}
							passHref
						>
							<Button
								color='secondary'
								variant='contained'
								size='small'
							>
								<TiMessages className='ml-1' />
								צפייה בפנייה
							</Button>
						</Link>
						{/* <Button
							color='primary'
							variant='contained'
							size='small'
							onClick={() =>
								setState({
									ticket: params.row,
									state: 'EDIT',
								})
							}
						>
							<RiEdit2Line className='ml-1' />
							שינוי סטטוס
						</Button> */}
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
				open={!!state.ticket}
				ticket={state.ticket}
				state={state.state}
				handleClose={() =>
					setState({
						ticket: null,
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
