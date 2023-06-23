import { models, model, Schema, Model, ObjectId } from 'mongoose'

export interface IProject extends Document {
	_id: ObjectId
	title: string
	tags: string[]
	description: string
	image: string
	/**
	 * Whether the project is pinned in the home page
	 */
	pinned: boolean
	owner: ObjectId
	type: string
	techs: string[]
	createdAt: number
	updatedAt: number
}

const ProjectSchema: Schema<IProject> = new Schema(
	{
		title: String,
		tags: [String],
		description: String,
		image: String,
		pinned: Boolean,

		type: String,
		techs: [String],

		owner: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},

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
