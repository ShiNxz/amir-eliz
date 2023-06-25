const StatBox = ({ title, value, style }: IStatBox) => {
	return (
		<div className='flex flex-col items-start px-8 py-6 bg-white border-gray-100 rounded-xl border border-slate-300/80 cursor-pointer'>
			<h6 className={`text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-l mb-1 ${style}`}>
				{value}
			</h6>
			<span className='text-lg text-slate-600'>{title}</span>
		</div>
	)
}

interface IStatBox {
	title: string
	value: number
	style: string
}

export default StatBox
