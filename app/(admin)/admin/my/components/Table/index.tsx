'use client'

import type { IProject } from '@/utils/models/Project'
import { DataGrid, GridColDef, GridRowsProp, heIL } from '@mui/x-data-grid'
import useProjectsStore from '../../store'
import Columns from './Cols'
import CustomToolbar from '../../../UI/Tables/CustomToolbar'

const Table = () => {
	const projects = useProjectsStore((state) => state.projects)
	const isLoading = useProjectsStore((state) => state.isLoading)
	const setPasswordModal = useProjectsStore((state) => state.setPasswordModal)

	const columns: GridColDef[] = Columns(setPasswordModal)

	const rows: GridRowsProp<IProject> = projects.map((project) => ({
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
