import { Box, Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

const MobileNav = () => {
	const [opened, { toggle }] = useDisclosure(false)

	return (
		<>
			<div className='block md:hidden'>
				<Burger
					opened={opened}
					onClick={toggle}
					aria-label='פתיחת תפריט'
				/>
			</div>
			<div className={`bg-white fixed h-full inset w-full ${opened ? 'flex' : 'hidden'}`}>
				<Burger
					opened={opened}
					onClick={toggle}
					aria-label='פתיחת תפריט'
				/>
			</div>
		</>
	)
}

export default MobileNav
