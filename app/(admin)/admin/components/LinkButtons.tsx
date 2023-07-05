import LinkButton from './LinkButton'

const LinkButtons = () => {
	return (
		<div className='grid grid-cols-1 xl:grid-cols-3 gap-4'>
			<LinkButton
				title='ניהול פרויקטים'
				text='מעבר לניהול הפרויקטים שלי'
				style='from-fuchsia-500 to-purple-500'
				link='/admin/my'
			/>
			<LinkButton
				title='ניהול פרויקטים'
				text='מעבר לניהול הפרויקטים שלי'
				style='from-fuchsia-500 to-purple-500'
				link='/admin/my'
			/>
			<LinkButton
				title='כותרת'
				text='מעבר לניהול הפרויקטים שלי'
				style='from-amber-500 to-orange-500'
				link='/admin/my'
			/>
		</div>
	)
}

export default LinkButtons
