import { ExpressInstance, httpServerInstance } from './types/types.d'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs, resolvers } from './schema'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import http from 'http'
type graphQLServer = {
	httpServer: httpServerInstance
	server: ApolloServer
}
export const createGraphQLServer = async (express: ExpressInstance): Promise<graphQLServer> => {
	const httpServer = http.createServer(express)
	const server = new ApolloServer({
		typeDefs,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		resolvers: resolvers as any,
		plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
	})
	await server.start()
	return {
		httpServer,
		server
	}
}
export const createStandaloneServer = async (port = 4000): Promise<ApolloServer> => {
	const server = new ApolloServer({ typeDefs, resolvers: resolvers as any })
	await startStandaloneServer(server, { listen: { port } })
	return server
}
