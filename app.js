import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
	res.send('<h1>ruta de express</h1>')
})

const port = process.env.PORT || 4000
app.listen(port, () => {
	console.log(`Servidor Express escuchando puerto ${port}...`)
})