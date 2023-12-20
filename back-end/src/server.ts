import express from 'express'
import ImagesRouter from './routers/Images.router'
import 'dotenv/config'

const PORT = process.env.APP_PORT ?? 3001
const app = express()

app.use(express.json())
const accessControl: express.RequestHandler = (req, res, next) => {
  const allowedOrigins = [
    'http://localhost:5173',
    'http://ex.com'
  ]
  const origin = req.headers.origin ?? '' // se nao vir nada vai ser tornar uma string vazia
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin)
  }
  res.header('Access-Control-Allow-Methods', 'GET')
  res.header('Access-Control-Allow-Headers', '*')
  next()
}
app.use(accessControl)

app.get('/', (_req, res) => { res.status(200).json({ message: 'Hello World' }) })
app.use('/images', ImagesRouter)

app.listen(PORT, () => { console.log(`Running on port ${PORT}`) })

export default app
