'use client'

import Axios from '@/utils/functions/Fetch'
import { CircularProgress, TextField } from '@mui/material'
import { toast } from 'react-toastify'
import { RouteTabs } from '../components/Tabs'
import useAccountSettingsStore from '../store'

const Tab = () => {
	const tab = useAccountSettingsStore((state) => state.tab)
	const { Component } = RouteTabs[tab]

	return (
		<div className='rounded-lg text-slate-900 relative bg-white border border-slate-300/70 p-6'>
			<Component />
		</div>
	)
}

export const handleChangeSetting = async (key: string, value: string | object) => {
	try {
		const { data } = await Axios.put('/api/admin/settings', { key, value })
		toast.success(data || 'הגדרה עודכנה בהצלחה')
		return true
	} catch (err) {
		toast.error((err as any).response.data || 'שגיאה בעדכון הגדרה')
		return false
	}
}

export const SettingInput = ({ label, value, setValue, isLoading, helper }: ISettingInput) => {
	return (
		<TextField
			label={label}
			variant='outlined'
			id={label}
			value={value}
			onChange={(e) => setValue(e.target.value)}
			helperText={
				isLoading ? (
					<span className='flex flex-row items-center'>
						<CircularProgress
							className='ml-3'
							size={16}
						/>
						שומר שינויים, אנא המתן...
					</span>
				) : (
					helper
				)
			}
			type='text'
			autoComplete='off'
			color='primary'
		/>
	)
}

interface ISettingInput {
	label: string
	value: string
	setValue: (value: string) => void
	isLoading: boolean
	helper: string
}

export default Tab
