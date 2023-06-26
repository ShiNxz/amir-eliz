import type { Theme } from '@mui/material/styles'

const ComponentsOverrides = (theme: Theme) => {
	return Object.assign(DataGrid(theme))
}

const DataGrid = (theme: Theme) => {
	return {
		MuiDataGrid: {
			styleOverrides: {
				root: {
					'borderRadius': 0,
					'border': `1px solid transparent`,
					'& .MuiTablePagination-root': {
						borderTop: 0,
					},
					'& .MuiDataGrid-toolbarContainer': {
						'padding': '1rem',
						//@ts-ignore
						'backgroundColor': theme.palette.background.neutral,
						'& .MuiButton-root': {
							'marginRight': '0.5rem',
							'color': theme.palette.text.primary,
							'&:hover': {
								backgroundColor: theme.palette.action.hover,
							},
						},
					},
					'& .MuiDataGrid-cell, .MuiDataGrid-columnsContainer': {
						borderBottom: `1px solid ${theme.palette.divider}`,
					},
					'& .MuiDataGrid-columnSeparator': {
						color: theme.palette.divider,
					},
					'& .MuiDataGrid-columnHeader[data-field="__check__"]': {
						padding: 0,
					},
				},
			},
		},
		MuiGridMenu: {
			styleOverrides: {
				root: {
					'& .MuiDataGrid-gridMenuList': {
						//@ts-ignore
						borderRadius: 8,
					},
					'& .MuiMenuItem-root': {
						...theme.typography.body2,
					},
				},
			},
		},
		MuiGridFilterForm: {
			styleOverrides: {
				root: {
					'padding': '1.5rem 0',
					'& .MuiFormControl-root': {
						margin: '0rem 0.5rem',
					},
					'& .MuiInput-root': {
						'marginTop': '3rem',
						'&::before, &::after': {
							display: 'none',
						},
						'& .MuiNativeSelect-select, .MuiInput-input': {
							...theme.typography.body2,
							padding: '0.75rem 1rem',
							borderRadius: 8,
							//@ts-ignore
							backgroundColor: theme.palette.background.neutral,
						},
						'& .MuiSvgIcon-root': {
							right: 4,
						},
					},
				},
			},
		},
		MuiGridPanelFooter: {
			styleOverrides: {
				root: {
					'padding': '2rem',
					'justifyContent': 'flex-end',
					'& .MuiButton-root': {
						'&:first-of-type': {
							'marginRight': '1.5rem',
							'color': theme.palette.text.primary,
							'&:hover': {
								backgroundColor: theme.palette.action.hover,
							},
						},
						'&:last-of-type': {
							'color': theme.palette.common.white,
							'backgroundColor': theme.palette.primary.main,
							'&:hover': {
								backgroundColor: theme.palette.primary.dark,
							},
						},
					},
				},
			},
		},
	}
}

export default ComponentsOverrides
