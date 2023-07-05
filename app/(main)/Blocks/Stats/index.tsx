import StatsArray, { type IStats } from '@/data/Stats'
import Counter from '../../UI/AnimatedCounter'

const Stats = () => {
	return (
		<div className='bg-gray-50 border border-gray-200 p-6'>
			<div className='grid grid-cols-1 xl:grid-cols-5 justify-between text-center container'>
				{StatsArray.map((stat, index) => (
					<Stat
						key={index}
						first={index === 0}
						{...stat}
					/>
				))}
			</div>
		</div>
	)
}

const Stat = ({ first, title, value, style }: IStat) => {
	return (
		<div className={`flex flex-col lg:py-0 py-4 ${first ? '' : 'border-t lg:border-t-0 border-r-0 lg:border-r border-gray-200'}`}>
			<div
				className={`flex flex-row text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r items-center justify-center ${style}`}
			>
				<span className='text-5xl lg:text-6xl'>+</span>
				<Counter
					from={0}
					to={value}
				/>
			</div>
			<span className='text-base lg:text-lg font-medium text-gray-700'>{title || 'dd'}</span>
		</div>
	)
}

interface IStat extends IStats {
	first: boolean
}

export default Stats
