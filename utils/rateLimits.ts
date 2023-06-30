import rateLimit from 'express-rate-limit'

// Define the rate limit settings
const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 1 minute
	max: 50, // Limit each IP to 100 requests per windowMs
	keyGenerator: (req) => {
		// Custom keyGenerator function to extract IP address
		return (
			req.headers['x-forwarded-for'] ||
			req.connection.remoteAddress ||
			req.socket.remoteAddress ||
			req.connection.socket.remoteAddress
		)
	},
	handler: (_, res) => {
		return res.status(429).json({
			success: false,
			error: 'Too many requests from this IP, please try again later.',
		})
	},
})

export default limiter
