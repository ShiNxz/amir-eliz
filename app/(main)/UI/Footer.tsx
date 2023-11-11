import Link from 'next/link'

const Footer = () => {
	return (
		<div className='border-t border-gray-200 bg-gray-50 text-center lg:text-right'>
			<div className='flex flex-col-reverse lg:flex-row p-10 lg:p-20 container min-h-[10rem] justify-between'>
				<div className='flex flex-row gap-24'>
					{LINKS.map(({ title, links }) => (
						<Section
							title={title}
							key={title}
						>
							{links.map((link) => (
								<Link
									className='hover:text-black hover:underline'
									href={link.href}
									key={link.title}
								>
									{link.title}
								</Link>
							))}
						</Section>
					))}
				</div>

				<div className='flex flex-col gap-2 text-end mb-12 lg:mb-0'>
					<Logo />
					<span className='text-sm'>© 2019-{new Date().getFullYear().toString()}</span>
				</div>
			</div>
		</div>
	)
}

const LINKS = [
	{
		title: 'קישורים',
		links: [
			{
				title: 'אודות',
				href: '/',
			},
			{
				title: 'תיק עבודות',
				href: '/projects',
			},
			{
				title: 'צור קשר',
				href: '/contact',
			},
		],
	},
	{
		title: 'פרויקטים אחרונים',
		links: [
			{
				title: 'BuildIsrael',
				href: 'https://buildisrael.net',
			},
			{
				title: 'Next-il',
				href: 'https://next-il.co.il',
			},
			{
				title: 'StartApp',
				href: 'https://start-app.co.il',
			},
		],
	},
]

const Logo = () => (
	<Link
		href='/'
		className='text-slate-8700 font-bold text-3xl'
	>
		AmirEliz
	</Link>
)

const Section = ({ title, children }: IProps) => {
	return (
		<div className='flex flex-col gap-2'>
			<span className='text-lg font-bold'>{title}</span>
			{children}
		</div>
	)
}

interface IProps {
	title: string
	children: React.ReactNode
}

export default Footer
