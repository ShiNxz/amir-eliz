'use client'

import { Tab, Tabs } from '@mui/material'
import { BsPerson, BsPersonLock } from 'react-icons/bs'
import useAccountSettingsStore from '../store'
import GeneralOptionsTab from '../Tabs/General'
import PasswordOptionsTab from '../Tabs/Password'

const SettingsTabs = () => {
	const tab = useAccountSettingsStore((state) => state.tab)
	const setTab = useAccountSettingsStore((state) => state.setTab)

	return (
		<div className='flex flex-col w-full rounded-lg text-slate-900 relative bg-white border border-slate-300/70 mb-6'>
			<Tabs
				value={tab}
				onChange={(e, newTab) => setTab(newTab)}
				aria-label='disabled tabs example'
			>
				{RouteTabs.map((tab) => (
					<Tab
						label={tab.label}
						icon={tab.icon}
					/>
				))}
			</Tabs>
		</div>
	)
}

export const RouteTabs: ITab[] = [
	{
		label: 'פרטי משתמש',
		Component: GeneralOptionsTab,
		icon: <BsPerson />,
	},
	{
		label: 'אבטחה',
		Component: PasswordOptionsTab,
		icon: <BsPersonLock />,
	},
]

interface ITab {
	label: string
	Component: React.FC
	icon: JSX.Element
}

export default SettingsTabs
