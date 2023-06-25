'use client'

import Block from './Block'
import Social from './Social'
import { Contacts } from './Contacts'
import ContactForm from './Form'

const ContactPage = () => {
	return (
		<div className='py-32 pt-40 bg-gray-100'>
			<div className='container grid grid-cols-7'>
				<div className='col-span-2 flex flex-col justify-between'>
					<div className='flex flex-col gap-8'>
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
				<div className='col-span-5'>
					<ContactForm />
				</div>
			</div>
		</div>
	)
}

export default ContactPage
