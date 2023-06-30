import { models, model, Schema, Model, ObjectId } from 'mongoose'
import type { DomainProvider } from '../schemas/domain'

export interface Domain extends Document {
	_id: ObjectId

	domain: string
	/**
	 * Search for the domain in the providers array and replace the domain with the url if found
	 * @example GoDaddy
	 */
	provider: DomainProvider | string

	expDate: Date

	createdAt: number
	updatedAt: number
}

const DomainSchema: Schema<Domain> = new Schema(
	{
		domain: String,
		provider: String,

		expDate: Date,

		createdAt: Number,
		updatedAt: Number,
	},
	{
		collection: 'Domains',
		timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
	}
)

const Domain: Model<Domain> = models.Domain || model<Domain>('Domain', DomainSchema)
export default Domain
