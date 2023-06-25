const Tag = ({ children, className }: IProps) => {
	return <div className={`text-sm rounded-full px-3 py-1 bg-gray-200 ${className || ''}`}>{children}</div>
}

interface IProps {
	children: React.ReactNode
	className?: string
}

export default Tag
