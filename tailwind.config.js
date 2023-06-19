/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./data/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			letterSpacing: {
				'title': '0.35em',
			}
		},
	},
	plugins: [
		({ addComponents }) => {
			addComponents({
				'.container': {
					'width': '100%',
					'marginLeft': 'auto',
					'marginRight': 'auto',
					'paddingLeft': '2rem',
					'paddingRight': '2rem',
					'@screen sm': {
						maxWidth: '540px',
					},
					'@screen md': {
						maxWidth: '720px',
					},
					'@screen lg': {
						maxWidth: '960px',
					},
					'@screen xl': {
						maxWidth: '1250px',
					},
				},
			})
		},
	],
}
