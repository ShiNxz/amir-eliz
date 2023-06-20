import type { Variants } from 'framer-motion'

export const fadeUp: Variants = {
	in: (i) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { type: 'spring', stiffness: 300, damping: 22, delay: i * 0.1 },
	}),
	start: { opacity: 0, y: 30, scale: 0.9, transition: { duration: 0.2 } },
}

export const fadeUpSlide: Variants = {
	in: (i) => ({
		opacity: 1,
		y: 0,
		transition: { type: 'spring', stiffness: 300, damping: 22, delay: i * 0.1 },
	}),
	start: { opacity: 0, y: 20, transition: { duration: 0.2 } },
}

export const fadeDown: Variants = {
	in: (i) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { type: 'spring', stiffness: 300, damping: 22, delay: i * 0.1 },
	}),
	start: { opacity: 0, y: -20, scale: 0.9, transition: { duration: 0.2 } },
}

export const fadeRight: Variants = {
	in: (i) => ({
		opacity: 1,
		x: 0,
		scale: 1,
		transition: { type: 'spring', stiffness: 600, damping: 30, delay: i * 0.1 },
	}),
	start: { opacity: 0, x: -30, scale: 0.92, transition: { duration: 0.2 } },
}

export const fadeRight2: Variants = {
	in: (i) => ({
		opacity: 1,
		x: 0,
		scale: 1,
		transition: { type: 'spring', stiffness: 600, damping: 37, delay: i * 0.1 },
	}),
	start: { opacity: 0, x: -50, scale: 0.96, transition: { duration: 0.3 } },
}

export const fadeLeft: Variants = {
	in: (i) => ({
		opacity: 1,
		x: 0,
		scale: 1,
		transition: { type: 'spring', stiffness: 300, damping: 22, delay: i * 0.1 },
	}),
	start: { opacity: 0, x: -50, scale: 0.9, transition: { duration: 0.2 } },
}
