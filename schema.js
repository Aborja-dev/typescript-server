import gql from 'graphql-tag'

export const typeDefs = gql`
    type Query {
        hola: String
    }
`
export const resolvers = {
	Query: {
		hola: async () => 'hola'
	}
}
