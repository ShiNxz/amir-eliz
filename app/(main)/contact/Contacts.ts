import { FaGithub, FaInstagram, FaLinkedin, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'

export const Contacts = [
	{
		title: 'כתובת אימייל',
		text: 'contact@amireliz.co.il',
		icon: HiOutlineMail,
		link: 'mailto:contact@amireliz.co.il'
	},
	{
		title: 'טלפון',
		text: '055-720-0196',
		icon: HiOutlinePhone,
		link: 'tel:0557200196'
	},
	{
		title: 'WhatsApp',
		text: '055-720-0196',
		icon: FaWhatsapp,
		link: 'https://wa.me/972557200196'
	},
]

export const Networks = [
	{
		link: 'https://www.instagram.com/amir.eliz/',
		icon: FaInstagram,
	},
	{
		link: 'https://www.linkedin.com/in/amireliz/',
		icon: FaLinkedin,
	},
	{
		link: 'https://github.com/ShiNxz',
		icon: FaGithub,
	},
]
