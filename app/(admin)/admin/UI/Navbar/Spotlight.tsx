import { Kbd } from '@mantine/core'
import { spotlight } from '@mantine/spotlight'

const Spotlight = () => {
	return (
		<div
			className='w-fit cursor-pointer'
			onClick={() => spotlight.open()}
		>
			<span className='font-medium text-sm ml-4'>חיפוש:</span>
			<Kbd>⌘</Kbd> + <Kbd>Q</Kbd>
		</div>
	)
}

export default Spotlight
