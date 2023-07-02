'use client'

import Spotlight from './Spotlight'

const Navbar = () => {
	return (
		<div className='hidden md:flex flex-row items-center justify-between bg-white h-[4.1rem] border-b border-slate-300/70 px-12'>
			<Spotlight />
		</div>
	)
}

export default Navbar
