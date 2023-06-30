import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

const LinkButton = ({ title, text, style, link }: IStatBox) => {
	return (
		<Link
			href={link}
			className='flex flex-row items-center justify-between px-8 py-6 bg-gray-50 border-gray-100 rounded-xl border border-gray-300/80 duration-300 hover:bg-white hover:border-gray-300 hover:-translate-y-0.5 hover:shadow-md cursor-pointer'
		>
			<div className='flex flex-col items-start'>
				<h6 className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-l mb-1 ${style}`}>
					{title}
				</h6>
				<span className='text-base text-slate-600'>{text}</span>
			</div>
			<FaArrowLeft className='text-4xl text-slate-300' />
		</Link>
	)
}

interface IStatBox {
	title: string
	text: string
	style: string
	link: string
}

export default LinkButton
