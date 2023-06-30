import { models, model, Schema, Model, ObjectId } from 'mongoose'

export interface ContactForm extends Document {
	_id: ObjectId

	name: string
	identifier: string
	topic: string

	message: string

	ipAddress: string

	createdAt: number
	updatedAt: number
}

const ContactFormSchema: Schema<ContactForm> = new Schema(
	{
		name: String,
		identifier: String,
		topic: String,

		message: String,

		ipAddress: String,

		createdAt: Number,
		updatedAt: Number,
	},
	{
		collection: 'ContactForms',
		timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
	}
)

const ContactForm: Model<ContactForm> = models.ContactForm || model<ContactForm>('ContactForm', ContactFormSchema)
export default ContactForm
