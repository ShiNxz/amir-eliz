'use client'

import useAuth from '@/utils/hooks/useAuth'
import { Avatar, Menu, MenuItem } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { BiLogOut } from 'react-icons/bi'
import { RiArrowDownSLine } from 'react-icons/ri'
import { PAGES } from '../Sidebar/Routes'

const User = () => {
	const { user, logout } = useAuth()

	const router = useRouter()

	const [anchorEl, setAnchorEl] = useState<null | SVGElement>(null)

	return (
		user && (
			<div className='flex flex-row gap-2 items-center'>
				<Avatar
					src={user.page && user.page.avatar}
					alt={user.page && user.page.name}
					sx={{ width: 36, height: 36 }}
				>
					{user && (user.username[0] + user.username[1]).toUpperCase()}
				</Avatar>
				<span className='text-medium'>{user.page ? user.page.name : user.username}</span>
				<RiArrowDownSLine
					className='cursor-pointer'
					onClick={(event) => setAnchorEl(event.currentTarget)}
				/>
				<Menu
					id='basic-menu'
					anchorEl={anchorEl}
					open={!!anchorEl}
					onClose={() => setAnchorEl(null)}
					MenuListProps={{
						'aria-labelledby': 'basic-button',
					}}
				>
					{PAGES.map((p) => (
						<MenuItem
							onClick={() => {
								router.push(`/admin/${p.path}`)
								setAnchorEl(null)
							}}
							className='flex flex-row gap-2'
						>
							{p.icon}
							{p.title}
						</MenuItem>
					))}
					<MenuItem
						onClick={logout}
						className='flex flex-row gap-2'
					>
						<BiLogOut />
						התנתק
					</MenuItem>
				</Menu>
			</div>
		)
	)
}

export default User
