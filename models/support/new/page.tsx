import NewTicketForm from './Form'
import Title from './Title'

const FormsPage = () => {
	return (
		<>
			<Title />
			<NewTicketForm />
		</>
	)
}

export const metadata = {
	title: `${process.env.NEXT_PUBLIC_WEBSITE_NAME} | פנייה חדשה`,
}

export default FormsPage
