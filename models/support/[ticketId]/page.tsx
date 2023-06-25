import FormInfo from './FormInfo'
import FormMessages from './FormMessages'
import NewMessage from './NewMessage'
import Title from './Title'

const FormPage = () => {
	return (
		<>
			<Title />

			<div className='grid grid-cols-8 gap-6'>
				<FormInfo />
				<div className='flex flex-col col-span-6 gap-4'>
					<FormMessages />
					<NewMessage />
				</div>
			</div>
		</>
	)
}

export const metadata = {
	title: `${process.env.NEXT_PUBLIC_WEBSITE_NAME} | פרטי פנייה`,
}

export default FormPage
