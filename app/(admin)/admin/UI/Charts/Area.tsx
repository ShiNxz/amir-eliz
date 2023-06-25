'use client'

import dynamic from 'next/dynamic'
import he from './Locale.json'
import ApexCharts from 'apexcharts'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const AreaChart = ({ label, categories, data, toolbox, height, options }: IProps) => {
	const chartOptions: ApexCharts.ApexOptions = {
		chart: {
			id: 'views-area-chart',
			foreColor: '#ccc',
			fontFamily: 'inherit',
			locales: [he],
			defaultLocale: 'he',
			// height: 200,
			// stacked: true,
			animations: {
				enabled: true,
				easing: 'easeout',
				dynamicAnimation: {
					speed: 700,
				},
			},
		},
		xaxis: {
			categories: categories,
			axisTicks: {
				color: '#333',
			},
			axisBorder: {
				color: '#333',
			},
		},
		yaxis: {
			min: 0,
			tickAmount: 10,
		},
		stroke: {
			curve: 'smooth',
		},
		fill: {
			type: 'gradient',
			gradient: {
				shadeIntensity: 0,
				opacityFrom: 0.5,
				opacityTo: 0,
			},
		},
		markers: {
			size: 5,
			hover: {
				size: 7,
			},
		},
		tooltip: {
			theme: 'light',
		},
		grid: {
			borderColor: '#81879b',
		},
		...options,
	}

	return (
		<div className='rounded-lg text-slate-900 relative bg-white border border-slate-300/70'>
			<div className='flex flex-row justify-between p-4'>
				<span className='text-xl pb-2 font-medium block'>{label}</span>
				{toolbox}
			</div>
			<Chart
				options={chartOptions}
				series={data}
				type='area'
				width='100%'
				height={height}
			/>
		</div>
	)
}

interface IProps {
	label: string
	categories: string[]
	data: {
		name: string
		data: any
	}[]
	toolbox?: JSX.Element
	loading?: boolean
	refresher?: () => void
	height?: number
	options?: ApexCharts.ApexOptions
}

export default AreaChart
