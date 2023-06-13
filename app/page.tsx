import MainBlock from './Blocks/Main'
import Features from './Blocks/Features'
import Techs from './Blocks/Techs'
import TrustedSection from './Blocks/Trusted'
import Stats from './Blocks/Stats'

const Home = () => {
	return (
		<div className='flex flex-col'>
			<MainBlock />
			<Features />
			<Stats />
			<TrustedSection />
		</div>
	)
}

export default Home
