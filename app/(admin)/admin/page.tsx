import Title from './Title'

import StatBox from './UI/Charts/StatBox'
import Graphs from './components/Graphs'
import LinkButtons from './components/LinkButtons'
import { ProjectsStore } from './my/store'

const Home = () => {
	return (
		<div className='flex flex-col gap-6'>
			<ProjectsStore />
			<Title />
			<div className='grid grid-cols-4 gap-4'>
				<StatBox
					title='כניסות לאתר היום'
					value={1000}
					style='from-sky-500 to-blue-500'
				/>
				<StatBox
					title='כניסות לאתר בממוצע'
					value={1000}
					style='from-indigo-500 to-violet-500'
				/>
				<StatBox
					title='לקוחות'
					value={1000}
					style='from-fuchsia-500 to-purple-500'
				/>
				<StatBox
					title='לקוחות חדשים היום'
					value={1000}
					style='from-amber-500 to-orange-500'
				/>
			</div>

			<Graphs />

			<LinkButtons />
		</div>
	)
}

export default Home
