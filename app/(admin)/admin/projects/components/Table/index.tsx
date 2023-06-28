'use client'

import type { IProject } from '@/utils/models/Project'
import { DataGrid, GridColDef, GridRowsProp, heIL } from '@mui/x-data-grid'
import useProjectsStore from '../../store'
import Columns from './Cols'
import CustomToolbar from '../../../UI/Tables/CustomToolbar'
import openDeleteModal from '../DeleteModal'

export const Table = () => {
	const projects = useProjectsStore((state) => state.projects)
	const isLoading = useProjectsStore((state) => state.isLoading)
	const setModal = useProjectsStore((state) => state.setModal)
	const setModalContent = useProjectsStore((state) => state.setModalContent)

	const columns: GridColDef[] = Columns(setModal, openDeleteModal, setModalContent)

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
