'use client'

import Block from './Block'
import Social from './Social'
import { Contacts } from './Contacts'
import ContactForm from './Form'

const ContactPage = () => {
	return (
		<div className='py-32 pt-24 lg:pt-32 xl:pt-40 bg-gray-100'>
			<div className='sm:container flex flex-col-reverse xl:grid xl:grid-cols-7'>
				<div className='xl:col-span-2 flex flex-col justify-between px-4 xl:px-0'>
					<div className='flex flex-col gap-8 xl:mb-0 mb-12'>
						{Contacts.map((contact, index) => (
							<Block
								key={contact.text}
								index={index}
								{...contact}
							/>
						))}
					</div>
					<Social />
				</div>
				<div className='xl:col-span-5'>
					<ContactForm />
				</div>
			</div>
		</div>
	)
}

export default ContactPage
