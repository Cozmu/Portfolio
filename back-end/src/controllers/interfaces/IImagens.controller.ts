import { type Request, type Response } from 'express'

interface IImagensController {
  getAllImagens: (req: Request, res: Response) => void
}

export default IImagensController
