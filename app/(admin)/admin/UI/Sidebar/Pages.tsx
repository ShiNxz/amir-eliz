'use client'

import type { IPage } from './Routes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Pages = ({ title, pages }: IProps) => {
	const router = usePathname()

	return (
		<div className='flex flex-col gap-2 px-4 my-8'>
			<span className='text-sm text-slate-500 font-medium'>{title}</span>
			{pages.map((page) => (
				<Page
					key={page.path}
					active={
						router === '/admin' && page.path === '' ? true : router?.replace('/admin/', '') === page.path
					}
					{...page}
				/>
			))}
		</div>
	)
}

const Page = ({ title, path, icon, active }: IPageExtended) => {
	return (
		<Link
			className={`rounded-lg px-5 py-2.5 flex flex-row items-center gap-3 duration-200 ${
				active ? 'bg-blue-600/90 text-white' : 'hover:bg-blue-600/20 text-slate-700'
			}`}
			href={`/admin/${path}`}
		>
			{icon}
			{title}
		</Link>
	)
}

interface IProps {
	title: string
	pages: IPage[]
}

interface IPageExtended extends IPage {
	active: boolean
}

export default Pages
