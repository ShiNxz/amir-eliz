'use client'

import Buttons from './Buttons'
import Companies from './Companies'
import Description from './Description'
import Particle from './Particle'
import Title, { variants, useStyle } from './Title'

const MainBlock = () => {
	const { style } = useStyle()

	return (
		<div className='min-h-screen pt-36 flex flex-col items-center justify-center gap-10 relative overflow-x-hidden'>
			<Particle
				style={variants[style].style}
				variant='TL'
			/>
			<Particle
				style={variants[style + 1 === variants.length ? 0 : style + 1].style}
				variant='BR'
			/>
			<Title />
			<Description />
			<Buttons />
			<Companies />
		</div>
	)
}

export default MainBlock
