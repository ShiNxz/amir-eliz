'use client'

import type { IUser } from '@/utils/models/User'
import useAuth from '@/utils/hooks/useAuth'
import { Popover } from '@mui/material'
import { useState } from 'react'
import useFormStore from './Store'
import { useEffect, useRef } from 'react'

const FormMessages = () => {
	const [anchorEl, setAnchorEl] = useState<{ target: HTMLElement; name: string } | null>(null)

	const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>, name: string) =>
		setAnchorEl({ target: event.currentTarget, name })

	const handlePopoverClose = () => setAnchorEl(null)

	const form = useFormStore((state) => state.form)

	const { user } = useAuth()

	const messagesRef = useRef<HTMLDivElement | null>(null)

	const scrollToBottom = () => {
		messagesRef.current?.scrollTo({
			top: messagesRef.current.scrollHeight,
			left: 0,
			behavior: 'smooth',
		})
	}

	useEffect(() => {
		scrollToBottom()
	}, [form?.messages])

	return (
		<>
			<div
				className='p-6 flex flex-col gap-4 rounded-lg text-slate-900 relative bg-white border border-slate-300/70 overflow-y-scroll h-[550px]'
				ref={messagesRef}
			>
				{form &&
					form.messages.map((message) => (
						<Message
							handlePopoverOpen={handlePopoverOpen}
							handlePopoverClose={handlePopoverClose}
							key={message.createdAt.toString()}
							message={message.message}
							createdAt={message.createdAt}
							authorName={(message?.authorId as IUser)?.page.name || (message.authorId as IUser)?.username}
							authorAvatar={(message?.authorId as IUser)?.page.avatar || ''}
							isSameUser={user?.username === (message.authorId as IUser)?.username}
						/>
					))}
			</div>
			<Popover
				id='mouse-over-popover'
				sx={{
					pointerEvents: 'none',
				}}
				open={!!anchorEl}
				anchorEl={anchorEl?.target || null}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				onClose={handlePopoverClose}
				disableRestoreFocus
			>
				<span className='m-2'>{anchorEl?.name && anchorEl.name}</span>
			</Popover>
		</>
	)
}

export const Message = ({
	handlePopoverOpen,
	handlePopoverClose,
	message,
	authorName,
	authorAvatar,
	isSameUser,
}: IMessageProps) => {
	return (
		<div className={isSameUser ? 'flex items-start justify-start' : 'flex items-end justify-end'}>
			<div
				className={`flex flex-col space-y-2 text-sm max-w-xs mx-2 items-end ${
					isSameUser ? 'order-2' : 'order-1'
				}`}
			>
				<div>
					<span
						className={`px-4 py-2 rounded-lg inline-block ${
							isSameUser
								? 'rounded-tr-none bg-blue-600 text-white'
								: 'rounded-bl-none bg-slate-300 text-slate-800'
						}`}
					>
						{message}
					</span>
				</div>
			</div>
			<img
				src={authorAvatar}
				alt={authorName}
				className={`w-6 h-6 rounded-full ${isSameUser ? 'order-1' : 'order-2'}`}
				onMouseEnter={(e) => handlePopoverOpen(e, authorName)}
				onMouseLeave={handlePopoverClose}
			/>
		</div>
	)
}

interface IMessageProps {
	handlePopoverOpen: (event: React.MouseEvent<HTMLElement>, name: string) => void
	handlePopoverClose: () => void
	message: string
	createdAt: number
	authorName: string
	authorAvatar: string
	isSameUser: boolean
}

export default FormMessages
