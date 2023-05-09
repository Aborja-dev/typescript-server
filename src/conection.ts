/* eslint-disable no-unused-vars */
import { config } from 'dotenv'
import mongoose from 'mongoose'
import { VoidPromise } from './types/types'
config()
const schema = new mongoose.Schema({
	text: mongoose.SchemaTypes.String
})
export const Mensaje = mongoose.model('mensajes', schema)
const connectionURL = process.env.DB_URL_TEST as string
export const startConnection = async (): VoidPromise => {
	try {
		await mongoose.connect(connectionURL)
		console.log('conexion a la base de datos')
		// queries()
	} catch (error) {
		// Error
		console.log('ha ocurrido un error', error)
	}
}

const queries = async (): VoidPromise => {
	const newMensaje = await Mensaje.create({ text: 'hello' })
	console.log(newMensaje)
}
