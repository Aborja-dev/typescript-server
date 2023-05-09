/* eslint-disable no-unused-vars */
import { config } from 'dotenv'
import mongoose from 'mongoose'
config()
const schema = mongoose.Schema({
	text: mongoose.SchemaTypes.String
})
const Mensaje = mongoose.model('mensajes', schema)
const connectionURL = process.env.DB_URL_TEST
export const startConnection = async () => {
	try {
		await mongoose.connect(connectionURL)
		console.log('conexion a la base de datos')
		// queries()
	} catch (error) {
		// Error
		console.log('ha ocurrido un error', error)
	}
}

const queries = async () => {
	const newMensaje = await Mensaje.create({ text: 'hello' })
	console.log(newMensaje)
}
