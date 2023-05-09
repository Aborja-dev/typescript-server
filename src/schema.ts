import gql from 'graphql-tag'
import { Mensaje } from './conection'

export const typeDefs = gql`
    type Query {
        hola: String
    }
`
interface Resolvers {
	Query: {
		hola: () => Promise<string | undefined>
	}
}
export const resolvers: Resolvers = {
	Query: {
		hola: async () => {
			const mensajes = await Mensaje.findOne({}) || { text: '' }
			return mensajes.text
		}
	}
}
