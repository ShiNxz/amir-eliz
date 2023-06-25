import SettingsTabs from './components/Tabs'
import Title from './components/Title'
import Tab from './Tabs'

const AccountSettings = () => {
	return (
		<>
			<Title />
			<SettingsTabs />
			<Tab />
		</>
	)
}

export const metadata = {
	title: `${process.env.NEXT_PUBLIC_WEBSITE_NAME} | ההגדרות משתמש`,
}

export default AccountSettings
