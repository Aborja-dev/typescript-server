import gql from 'graphql-tag'
import { Mensaje } from './conection.js'

export const typeDefs = gql`
    type Query {
        hola: String
    }
`
export const resolvers = {
	Query: {
		hola: async () => {
			const mensajes = await Mensaje.findOne({})
			return mensajes.text
		}
	}
}
