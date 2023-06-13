import Particle from './Particle'

const TrustedSection = () => {
	return (
		<div className='py-32 bg-white relative overflow-clip'>
			<Particle
				style='bg-blue-500'
				variant='LEFT'
			/>
			<Particle
				style='bg-cyan-500'
				variant='RIGHT'
			/>
			<div className='grid grid-cols-2 gap-8 container'>
				<Trusted
					name='דניאל כהן'
					avatar='https://vercel.com/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1669994321%2Fpreviews%2Favatar-tatiana.png&w=48&q=100&dpl=dpl_4JKyZX6rFqQS41tJicUhPzDX6P2c'
					text='לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.'
				/>
				<Trusted
					name='דניאל כהן'
					avatar='https://vercel.com/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1669994321%2Fpreviews%2Favatar-tatiana.png&w=48&q=100&dpl=dpl_4JKyZX6rFqQS41tJicUhPzDX6P2c'
					text='לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.'
				/>
			</div>
		</div>
	)
}

const Trusted = ({ name, text, avatar }: { name: string; text: string; avatar: string }) => {
	return (
		<div className='rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-white/60 duration-200 p-8 flex flex-col bg-white/40 z-50 shadow-2xl shadow-black/10'>
			<span className='text-xl font-medium text-gray-950 pb-8 border-b border-gray-300'>
				{`"`}
				{text}
				{`"`}
			</span>
			<div className='flex flex-row gap-2 pt-8'>
				<img
					src={avatar}
					alt={name}
					className='rounded-full w-12 h-12'
				/>
				<div className='flex flex-col'>
					<span className='text-gray-950 text-lg font-bold'>{name}</span>
					<span className='text-gray-700 text-base font-normal'>מנכ{`"`}ל</span>
				</div>
			</div>
		</div>
	)
}

export default TrustedSection
