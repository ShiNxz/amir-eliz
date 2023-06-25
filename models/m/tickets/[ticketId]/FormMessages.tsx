'use client'

import type { IUser } from '@/utils/models/User'
import useAuth from '@/utils/hooks/useAuth'
import { Popover } from '@mui/material'
import { useState } from 'react'
import useFormStore from './Store'
import { useEffect, useRef } from 'react'
import { Message } from 'app/(admin)/admin/support/[ticketId]/FormMessages'

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
				className='p-6 flex flex-col gap-4 rounded-lg text-slate-900 relative bg-white border border-slate-300/70 max-h-[550px] overflow-y-scroll'
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
							authorName={(message?.authorId as IUser)?.page.name || (message.authorId as IUser).username}
							authorAvatar={(message?.authorId as IUser)?.page.avatar || ''}
							isSameUser={user.username === (message.authorId as IUser).username}
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

export default FormMessages
