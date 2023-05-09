import { config } from 'dotenv'
import express from 'express'
import cors from 'cors'
import { startConnection } from './conection'
import { expressMiddleware } from '@apollo/server/express4'
import { createGraphQLServer } from './server'
import { VoidPromise } from './types/types'
config()
const runServer = async (): VoidPromise => {
	const app = express()
	const { server, httpServer } = await createGraphQLServer(app)
	app.use(cors())
	app.use(express.json())
	app.use(
		'/graphql',
		cors(),
		express.json(),
		expressMiddleware(server, {
			context: async ({ req }) => ({ token: req.headers.token })
		})
	)
	app.get('/', (_req, res) => {
		res.send('<h1>ruta de express</h1>')
	})
	await startConnection()
	const port = process.env.PORT || 4000
	httpServer.listen(port, () => {
		console.log(`Servidor Express escuchando puerto ${port}...`)
	})
}

runServer()
