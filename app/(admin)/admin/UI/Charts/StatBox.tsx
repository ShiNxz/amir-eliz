import Counter from '@/app/(main)/UI/AnimatedCounter'

const StatBox = ({ title, value, style }: IStatBox) => {
	return (
		<div className='flex flex-col items-center md:items-start px-4 md:px-8 py-3 md:py-6 bg-white border-gray-100 rounded-xl border border-slate-300/80 cursor-pointer'>
			<h6
				className={`text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-l mb-0.5 md:mb-1 ${style}`}
			>
				<Counter
					from={0}
					to={value}
				/>
			</h6>
			<span className='text-sm md:text-lg text-slate-600'>{title}</span>
		</div>
	)
}

interface IStatBox {
	title: string
	value: number
	style: string
}

export default StatBox
