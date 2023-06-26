import Title from './Title'
import AreaChart from './UI/Charts/Area'
import getLastXDays from './UI/Charts/GetDateString'
import StatBox from './UI/Charts/StatBox'

const Home = () => {
	const demoChart = [
		{
			name: 'כניסות לדף',
			data: [21, 32, 43, 13, 46, 33, 56],
		},
	]
	const demoChart2 = [
		{
			name: 'פניות',
			data: [11, 22, 33, 44, 55, 66, 77],
		},
	]

	return (
		<div className='flex flex-col'>
			<Title />
			<div className='grid grid-cols-4 gap-4 mb-6'>
				<StatBox
					title='כותרת'
					value={1000}
					style='from-sky-500 to-blue-500'
				/>
				<StatBox
					title='כותרת'
					value={1000}
					style='from-indigo-500 to-violet-500'
				/>
				<StatBox
					title='כותרת'
					value={1000}
					style='from-fuchsia-500 to-purple-500'
				/>
				<StatBox
					title='כותרת'
					value={1000}
					style='from-amber-500 to-orange-500'
				/>
			</div>
			<div className='grid grid-cols-2 gap-4'>
				<AreaChart
					label=''
					categories={getLastXDays(7)}
					data={demoChart}
					height={500}
				/>
				<AreaChart
					label=''
					categories={getLastXDays(7)}
					data={demoChart2}
					height={500}
				/>
			</div>
		</div>
	)
}

export default Home
