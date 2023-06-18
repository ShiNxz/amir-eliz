import MainBlock from './Blocks/Main'
import Features from './Blocks/Features'
import Techs from './Blocks/Techs'
import TrustedSection from './Blocks/Trusted'
import Stats from './Blocks/Stats'
import Services from './Blocks/Services'
import Works from './Blocks/Works'
import EasyForm from './Blocks/EasyForm'

const Home = () => {
	return (
		<div className='flex flex-col'>
			<MainBlock />
			<Features />
			<Stats />
			<Services />
			<Techs />
			<Works />
			<EasyForm />
			<TrustedSection />
		</div>
	)
}

export default Home
