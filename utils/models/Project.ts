import type { Domain } from './Domain'
import { models, model, Schema, Model, ObjectId } from 'mongoose'

export type TStatus = 'ONLINE' | 'OFFLINE' | 'MAINTENANCE'

export interface IProject extends Document {
	_id: ObjectId
	title: string
	description: string
	image: string
	/**
	 * Whether the project is pinned in the home page
	 */
	pinned: boolean
	type: string
	techs: string[]

	repository?: string
	website?: string
	fullDescription: string

	/**
	 * Connected Domain, used for the clients projects to see their valid domain exp date and more
	 */
	connected_domain: Domain | null

	status: TStatus

	password: string | null

	createdAt: number
	updatedAt: number
}

const ProjectSchema: Schema<IProject> = new Schema(
	{
		title: String,
		description: String,
		image: String,
		pinned: Boolean,

		type: String,
		techs: [String],

		repository: String,
		website: String,
		fullDescription: { type: String, default: '' },

		connected_domain: {
			type: Schema.Types.ObjectId,
			ref: 'Domain',
			default: null,
		},

		status: {
			type: String,
			enum: ['ONLINE', 'OFFLINE', 'MAINTENANCE'],
			default: 'ONLINE',
		},

		password: String,

		createdAt: Number,
		updatedAt: Number,
	},
	{
		collection: 'Projects',
		timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
	}
)

const Project: Model<IProject> = models.Project || model<IProject>('Project', ProjectSchema)
export default Project
