'use client'

import AreaChart from '../UI/Charts/Area'
import getLastXDays from '../UI/Charts/GetDateString'
import useProjectsStore from '../my/store'

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

const Graphs = () => {
	const { selectedProject } = useProjectsStore()

	return (
		<div
			className='grid grid-cols-1 xl:grid-cols-2 gap-4'
			key={selectedProject?._id.toString() || ''}
		>
			<AreaChart
				label='סטטיסטיקת כניסות'
				categories={getLastXDays(7)}
				data={demoChart}
				height={300}
			/>
			<AreaChart
				label='סטטיסטיקת לקוחות'
				categories={getLastXDays(7)}
				data={demoChart2}
				height={300}
				options={{
					colors: ['#f78a10'],
				}}
			/>
		</div>
	)
}

export default Graphs
