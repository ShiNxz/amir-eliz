'use client'

import type { Domain } from '@/utils/models/Domain'
import useUserForms from '../../store'
import useCompaniesStore from '../../store'
import Columns from './Cols'
import openDeleteModal from '../DeleteModal'
import {
	DataGrid,
	GridRowsProp,
	GridToolbarColumnsButton,
	GridToolbarContainer,
	GridToolbarDensitySelector,
	GridToolbarExport,
	GridToolbarFilterButton,
	heIL,
} from '@mui/x-data-grid'

const Table = () => {
	const domains = useUserForms((state) => state.domains)
	const isLoading = useUserForms((state) => state.isLoading)
	const setModal = useCompaniesStore((state) => state.setModal)

	const columns = Columns(setModal, openDeleteModal)

	const rows: GridRowsProp<Domain> = domains.map((domain) => ({
		...domain,
		id: domain._id,
	}))

	return (
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
			slots={{
				toolbar: CustomToolbar,
			}}
		/>
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
