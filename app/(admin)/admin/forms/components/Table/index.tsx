'use client'

import type { ContactForm } from '@/utils/models/Contact'
import { DataGrid, GridColDef, GridRowsProp, heIL } from '@mui/x-data-grid'
import useContactFormsStore from '../../store'
import Columns from './Cols'
import CustomToolbar from '../../../UI/Tables/CustomToolbar'

const Table = () => {
	const forms = useContactFormsStore((state) => state.forms)
	const isLoading = useContactFormsStore((state) => state.isLoading)

	const columns: GridColDef[] = Columns()

	const rows: GridRowsProp<ContactForm> = forms.map((project) => ({
		...project,
		id: project._id.toString(),
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

export default Table
