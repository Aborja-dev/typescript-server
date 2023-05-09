import express from 'express'
import cors from 'cors'
import { startConnection } from './conection.js'
import { expressMiddleware } from '@apollo/server/express4'
import { createGraphQLServer } from './server.js'
const app = express()

const { server, httpServer } = await createGraphQLServer(app)
const configExpressServer = async () => {
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
}
configExpressServer()
app.get('/', (req, res) => {
	res.send('<h1>ruta de express</h1>')
})

const runServer = async () => {
	await startConnection()
	const port = process.env.PORT || 4000
	httpServer.listen(port, () => {
		console.log(`Servidor Express escuchando puerto ${port}...`)
	})
}

runServer()
