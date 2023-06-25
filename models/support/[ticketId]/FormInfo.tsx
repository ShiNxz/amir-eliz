'use client'

import type { IconType } from 'react-icons/lib'
import type { IContact } from '@/utils/models/ContactForm'

import fetcher from '@/utils/fetcher'
import { useEffect } from 'react'
import useSWR from 'swr'
import { useParams, useRouter } from 'next/navigation'
import useFormStore from './Store'
import { MdEditNote, MdList, MdOutlineEmail, MdOutlinePolyline, MdOutlineWatchLater } from 'react-icons/md'
import FormStatuses from '@/utils/data/ContactForms/FormStatus'
import { formatToEu } from '../components/Table'

const FormInfo = () => {
	const params = useParams()
	const router = useRouter()

	const { data, isLoading, mutate } = useSWR(params ? `/api/admin/support/${params.ticketId}` : undefined, fetcher)

	const setForm = useFormStore((state) => state.setForm)
	const setIsLoading = useFormStore((state) => state.setIsLoading)
	const setMutate = useFormStore((state) => state.setMutate)

	setMutate(mutate)
	const { form } = (data as { form: IContact | null }) || ({ form: null } as { form: IContact | null })

	useEffect(() => {
		if (!form && !isLoading) return router.push('/admin/support/new')

		setForm(form)
		setIsLoading(isLoading)
	}, [form])

	return (
		<div className='flex flex-col p-6 rounded-lg text-slate-900 relative bg-white border border-slate-300/70 col-span-2 gap-2 overflow-hidden'>
			{isLoading ? (
				<div className='flex flex-col gap-2'>
					<div className='animate-pulse bg-slate-300/50 h-6 rounded-lg w-1/2' />
					<div className='animate-pulse bg-slate-300/50 h-6 rounded-lg w-1/3' />
					<div className='animate-pulse bg-slate-300/50 h-6 rounded-lg w-1/4' />
				</div>
			) : (
				form && (
					<>
						<h5 className='text-xl mb-2'>פרטי פנייה</h5>
						<Section
							icon={MdOutlineEmail}
							title='כתובת אימייל'
							text={form.email}
						/>
						<Section
							icon={MdList}
							title='נושא הפנייה'
							text={form.topic}
						/>
						<Section
							icon={MdOutlinePolyline}
							title='סטטוס'
							text={
								<div className={`rounded-full py-0.5 px-2 text-xs ${FormStatuses[form.status].style}`}>
									{FormStatuses[form.status].label}
								</div>
							}
						/>
						<Section
							icon={MdOutlineWatchLater}
							title='תאריך פתיחה'
							text={formatToEu(form.createdAt)}
						/>
						<Section
							icon={MdEditNote}
							title='תאריך עדכון אחרון'
							text={formatToEu(form.updatedAt)}
						/>
					</>
				)
			)}
		</div>
	)
}

const Section = ({ icon, title, text }: ISectionProps) => {
	const Icon = icon

	return (
		<div className='flex flex-row gap-2 items-center text-sm'>
			<Icon size={20} />
			<span className='font-medium'>{title}:</span>
			{text}
		</div>
	)
}

interface ISectionProps {
	icon: IconType
	title: string
	text: string | JSX.Element
}

export default FormInfo
