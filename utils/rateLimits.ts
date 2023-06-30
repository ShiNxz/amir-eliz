import rateLimit from 'express-rate-limit'

// Define the rate limit settings
const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 1 minute
	max: 50, // Limit each IP to 100 requests per windowMs
	keyGenerator: (req) => {
		const forwardedFor = req.headers['x-forwarded-for']
		if (forwardedFor) {
			const ips = forwardedFor.split(',').map((ip: string) => ip.trim())
			return ips[0]
		}

		return req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
	},
	handler: (_, res) => {
		return res.status(429).json({
			success: false,
			error: 'Too many requests from this IP, please try again later.',
		})
	},
})

export default limiter
