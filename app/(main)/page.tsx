import MainBlock from './Blocks/Main'
import Features from './Blocks/Features'
import Techs from './Blocks/Techs'
import TrustedSection from './Blocks/Trusted'
import Stats from './Blocks/Stats'
import Services from './Blocks/Services'
import Projects from './Blocks/Projects'
import EasyForm from './Blocks/EasyForm'
import { UseStore } from './Store'

const Home = () => {
	return (
		<div className='flex flex-col'>
			<UseStore />
			<MainBlock />
			<Features />
			<Stats />
			<Services />
			<Techs />
			<Projects />
			<EasyForm />
			<TrustedSection />
		</div>
	)
}

export default Home
