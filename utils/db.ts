import mongoose from 'mongoose'

const { MONGODB_URI, MONGODB_DB } = process.env

if (!MONGODB_URI) throw new Error('MONGODB_URI not defined')
if (!MONGODB_DB) throw new Error('MONGODB_DB not defined')

let cachedDb: mongoose.Connection

async function db() {
	if (cachedDb) {
		return cachedDb
	}

	const options = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		dbName: MONGODB_DB,
	}
	const conn = await mongoose.connect(`${MONGODB_URI}`, options)
	// @ts-ignore
	cachedDb = conn

	return conn
}

export default db
