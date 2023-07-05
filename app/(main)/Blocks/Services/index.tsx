'use client'

import { useState } from 'react'
import Tabs from './Tabs'
import Service from './Service'
import Particle from './Particle'
import ServiceTypes from '../../../../data/ServiceTypes'

const Services = () => {
	const [tab, setTab] = useState(0)

	return (
		<div className='container flex flex-col lg:grid grid-cols-1 xl:grid-cols-5 gap-10 xl:gap-28 py-14 md:py-16 lg:py-20 xl:py-32 min-h-[20rem] relative'>
			<Particle style={ServiceTypes[tab].style} />
			<Tabs
				tab={tab}
				setTab={setTab}
			/>
			<Service tab={tab} />
		</div>
	)
}

export default Services
