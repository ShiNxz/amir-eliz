'use client'

import useAuth from '@/utils/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { BiLogOut } from 'react-icons/bi'
import { RiArrowDownSLine } from 'react-icons/ri'
import { PAGES } from '../Sidebar/Routes'
import { Avatar, Menu } from '@mantine/core'

const User = () => {
	const { user, logout } = useAuth()

	return (
		user && (
			<div className='flex flex-row gap-2 items-center'>
				<Avatar sx={{ width: 36, height: 36 }}>{user.name}</Avatar>
				<span className='text-medium'>{user.name}</span>
				<RiArrowDownSLine
					className='cursor-pointer'
					onClick={(event) => {}}
				/>
			</div>
		)
	)
}

export default User
