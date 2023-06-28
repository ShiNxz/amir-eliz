'use client'

import useAuth from '@/utils/hooks/useAuth'
import { RiArrowDownSLine } from 'react-icons/ri'
import { Avatar, Kbd, Menu, Text } from '@mantine/core'
import { FaOutdent, FaSearch } from 'react-icons/fa'
import { spotlight } from '@mantine/spotlight'

const User = () => {
	const { user, logout } = useAuth()

	return (
		user && (
			<Menu
				shadow='md'
				width={200}
				trigger='hover'
			>
				<Menu.Target>
					<div className='flex flex-row gap-2 items-center cursor-pointer'>
						<Avatar
							color='blue'
							radius='sm'
						>
							{user.user.name.slice(0, -user.user.name.length + 2).toUpperCase()}
						</Avatar>
						<div className='flex flex-col'>
							<span className='font-semibold text-base leading-4'>{user.user.name}</span>
							<span className='font-normal text-xs'>{user.name}</span>
						</div>
						<RiArrowDownSLine />
					</div>
				</Menu.Target>

				<Menu.Dropdown>
					<Menu.Label>כללי</Menu.Label>
					<Menu.Item
						icon={<FaSearch size={14} />}
						rightSection={
							<Text
								size='xs'
								color='dimmed'
							>
								<Kbd>⌘</Kbd> + <Kbd>Q</Kbd>
							</Text>
						}
						onClick={() => spotlight.open()}
					>
						חיפוש
					</Menu.Item>

					<Menu.Divider />

					<Menu.Label>אפשרויות נוספות</Menu.Label>
					<Menu.Item
						color='red'
						icon={<FaOutdent size={14} />}
						onClick={logout}
					>
						התנתק
					</Menu.Item>
				</Menu.Dropdown>
			</Menu>
		)
	)
}

export default User
