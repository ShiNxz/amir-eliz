'use client'

import User from './User'
import Spotlight from './Spotlight'

const Navbar = () => {
	return (
		<div className='flex flex-row items-center justify-between bg-white h-16 min-h-[4rem] border-b border-slate-300/70 px-12'>
			<Spotlight />
			<User />
		</div>
	)
}

export default Navbar
