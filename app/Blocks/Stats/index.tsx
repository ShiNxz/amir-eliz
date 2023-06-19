import Counter from '@/app/UI/AnimatedCounter'
import StatsArray, { type IStats } from '@/data/Stats'

const Stats = () => {
	return (
		<div className='bg-gray-50 border border-gray-200 p-6'>
			<div className='grid grid-cols-5 justify-between text-center container'>
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
		<div className={`flex flex-col ${first ? '' : 'border-r border-gray-200'}`}>
			<div
				className={`flex flex-row text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r items-center justify-center ${style}`}
			>
				<span className='text-6xl'>+</span>
				<Counter
					from={0}
					to={value}
				/>
			</div>
			<span className='text-lg font-medium text-gray-700'>{title || 'dd'}</span>
		</div>
	)
}

interface IStat extends IStats {
	first: boolean
}

export default Stats
