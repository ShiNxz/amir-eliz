import { models, model, Schema, Model, ObjectId } from 'mongoose'

export interface IUser extends Document {
	_id: ObjectId

	name: string
	phone: string
	isAdmin: boolean

	createdAt: number
	updatedAt: number
}

const UserSchema: Schema<IUser> = new Schema(
	{
		name: String,
		phone: String,
		isAdmin: Boolean,

		createdAt: Number,
		updatedAt: Number,
	},
	{
		collection: 'Users',
		timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
	}
)

const User: Model<IUser> = models.User || model<IUser>('User', UserSchema)
export default User
