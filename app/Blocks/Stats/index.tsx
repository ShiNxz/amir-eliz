import Counter from '@/app/UI/AnimatedCounter'

const Stats = () => {
	return (
		<div className='bg-gray-50 border border-gray-200 p-6'>
			<div className='grid grid-cols-5 justify-between text-center container'>
				<Stat
					style='from-red-500 to-orange-500'
					last
				/>
				<Stat style='from-orange-500 to-yellow-500' />
				<Stat style='from-sky-500 to-indigo-500' />
				<Stat style='from-indigo-400 to-purple-500' />
				<Stat style='from-purple-500 to-pink-500' />
			</div>
		</div>
	)
}

const Stat = ({ last, style }: { last?: boolean; style: string }) => {
	return (
		<div className={`flex flex-col ${last ? '' : 'border-r border-gray-200'}`}>
			<Counter
				from={0}
				to={90}
				className={`text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r inline-block ${style}`}
			/>
			<span className='text-lg font-medium text-gray-700'>אתרים שנבנו</span>
		</div>
	)
}

export default Stats
