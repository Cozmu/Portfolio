import { type Request, type Response } from 'express'

interface IImagensController {
  getImagens: (req: Request, res: Response) => void
}

export default IImagensController
