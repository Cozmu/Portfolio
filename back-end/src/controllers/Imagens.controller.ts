import { type Request, type Response } from 'express'
import path from 'path'
import type IImagensController from './interfaces/IImagens.controller'

class ImagensController implements IImagensController {
  getImagens (req: Request, res: Response): void {
    const { img } = req.params
    res.sendFile(path.resolve(`src/imgs/${img}.png`))
  }
}

export default ImagensController
