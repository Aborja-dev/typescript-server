import { ApolloServer } from '@apollo/server'
import { typeDefs, resolvers } from './schema.js'

// npm install @apollo/server express graphql cors body-parser
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import http from 'http'

export const createGraphQLServer = async (express) => {
	const httpServer = http.createServer(express)
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
	})
	await server.start()
	return {
		httpServer,
		server
	}
}
