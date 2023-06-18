'use client'

import { motion, MotionProps } from 'framer-motion'
import { VariantProps, cva } from 'class-variance-authority'
import { forwardRef } from 'react'
import { cn } from '@/utils/cn'

const buttonVariants = cva(
	'bg-white text-gray-950 rounded-lg font-semibold relative w-fit flex flex-row items-center duration-200',
	{
		variants: {
			variant: {
				bordered: `rounded-lg`,
			},
			size: {
				xs: '!px-2 !py-1 text-sm',
				sm: 'px-4 py-1.5 text-sm',
				md: 'px-8 py-2 text-lg',
			},
			color: {
				solid: 'bg-gray-900 border-2 border-gray-900 hover:bg-gray-800 text-white',
				flat: 'bg-gray-200 hover:bg-gray-300 text-gray-700',
				gradient: 'bg-gradient-to-r from-blue-500 to-sky-500 !p-[2px] shadow-lg duration-300',
			},
		},
		defaultVariants: {
			variant: 'bordered',
			size: 'md',
			color: 'solid',
		},
	}
)

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
	({ className, size, variant, color, children, loading, disabled, gradientClassName, ...props }, ref) => {
		return (
			<motion.button
				disabled={disabled || loading || undefined}
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.92 }}
				ref={ref}
				{...props}
				className={cn(buttonVariants({ color, variant, className, size }))}
			>
				{color === 'gradient' ? (
					<div
						className={`px-8 py-2 rounded-md h-full w-full !bg-white !text-gray-900 hover:!bg-white/0 hover:!text-gray-100 duration-200 flex flex-row items-center ${gradientClassName}`}
					>
						{children}
					</div>
				) : (
					children
				)}
			</motion.button>
		)
	}
)

Button.displayName = 'Button'

interface IButtonProps extends ResMotionProps {
	children: React.ReactNode
	className?: string
	gradientClassName?: string
	loading?: boolean
	disabled?: boolean
}

type ResMotionProps = MotionProps & React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>

export default Button
