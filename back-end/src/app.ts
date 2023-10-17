import express from 'express'
import ImagensRouter from './routers/Images.router'

class App {
  public app: express.Express

  constructor () {
    this.app = express()

    this.config()
    this.Routers()
  }

  private config (): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH')
      res.header('Access-Control-Allow-Headers', '*')
      next()
    }

    this.app.use(express.json())
    this.app.use(accessControl)
  }

  private Routers (): void {
    this.app.use('/imagens', ImagensRouter)
  }

  public start (PORT: string | number): void {
    this.app.listen(PORT, () => { console.log(`Running on port ${PORT}`) })
  }
}

export default App
