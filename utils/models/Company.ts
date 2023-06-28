import type { IProject } from './Project'
import { models, model, Schema, Model, ObjectId } from 'mongoose'

export interface ICompany extends Document {
	_id: ObjectId

	name: string

	projects: IProject[]

	user: {
		name: string
		phone: string
		isAdmin: boolean
	}

	createdAt: number
	updatedAt: number
}

const CompanySchema: Schema<ICompany> = new Schema(
	{
		name: String,

		user: {
			name: String,
			phone: String,
			isAdmin: Boolean,
		},

		projects: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Project',
				default: [],
			},
		],

		createdAt: Number,
		updatedAt: Number,
	},
	{
		collection: 'Companies',
		timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
	}
)

const Company: Model<ICompany> = models.Company || model<ICompany>('Company', CompanySchema)
export default Company
