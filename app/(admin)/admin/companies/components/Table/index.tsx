'use client'

import type { ICompany } from '@/utils/models/Company'
import useUserForms from '../../store'
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
import useCompaniesStore from '../../store'
import Columns from './Cols'
import openDeleteModal from '../DeleteModal'
import useAuth from '@/utils/hooks/useAuth'

const Table = () => {
	const companies = useUserForms((state) => state.companies)
	const isLoading = useUserForms((state) => state.isLoading)
	const setModal = useCompaniesStore((state) => state.setModal)
	const setProjectModal = useCompaniesStore((state) => state.setProjectModal)

	const { user } = useAuth()

	const columns = Columns(setModal, openDeleteModal, user!, setProjectModal)

	const rows: GridRowsProp<ICompany> = companies.map((company) => ({
		...company,
		id: company._id,
		ownerName: company.user.name,
		ownerPhone: company.user.phone,
		isAdmin: company.user.isAdmin,
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
