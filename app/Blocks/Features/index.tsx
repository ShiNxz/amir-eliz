import { FiSettings } from 'react-icons/fi'

const Features = () => {
	return (
		<div className='container grid grid-cols-3 gap-10 mb-52'>
			<Feature />
			<Feature />
			<Feature />
		</div>
	)
}

const Feature = () => {
	return (
		<div className='flex flex-col gap-4 bg-slate-200/20 shadow-lg rounded-xl p-6'>
			<div className='bg-blue-100 rounded-lg p-2 w-fit h-fit'>
				<FiSettings className='text-blue-800' size={20} />
			</div>
			<h3>כותרת כותרת</h3>
			<p>טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט</p>
		</div>
	)
}

export default Features
