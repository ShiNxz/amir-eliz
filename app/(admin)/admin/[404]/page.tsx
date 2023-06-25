import Link from 'next/link'

const NotFound = () => {
	return (
		<>
			<div className='flex flex-col'>
				<h2 className='text-3xl font-semibold mb-6 text-gray-700'>שגיאה 404</h2>
				<h5 className='text-lg font-normal mb-6 text-gray-700'>
					הדף אינו נמצא! באפשרותך לחזור{' '}
					<Link
						href='/admin'
						className='text-blue-700 underline'
					>
						לפאנל הניהול
					</Link>{' '}
					או{' '}
					<Link
						href='/'
						className='text-blue-700 underline'
					>
						לעמוד הראשי
					</Link>
				</h5>
			</div>
		</>
	)
}

export default NotFound
