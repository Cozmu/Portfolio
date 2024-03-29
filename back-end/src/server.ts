import express from 'express'
import ImagesRouter from './routers/Images.router.js'
import 'dotenv/config'

class App {
  public app: express.Express

  constructor () {
    this.app = express()

    this.config()
    this.Routers()
  }

  private config (): void {
    const accessControl: express.RequestHandler = (req, res, next) => {
      // const allowedOrigins = [
      //   'http://localhost:5173',
      //   'https://portfolio-ten-peach-74.vercel.app/'
      // ]

      // const origin = req.headers.origin ?? '' // se nao vir nada vai ser tornar uma string vazia
      // if (allowedOrigins.includes(origin)) {
      // }
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Methods', 'GET')
      res.header('Access-Control-Allow-Headers', '*')
      next()
    }

    this.app.use(express.json())
    this.app.use(accessControl)
  }

  private Routers (): void {
    this.app.get('/', (_req, res) => { res.status(200).json({ message: 'Hello World' }) })
    this.app.use('/images', ImagesRouter)
  }

  public start (PORT: string | number): void {
    this.app.listen(PORT, () => { console.log(`Running on port ${PORT}`) })
  }
}

const PORT = process.env.APP_PORT ?? 3001

new App().start(PORT)
