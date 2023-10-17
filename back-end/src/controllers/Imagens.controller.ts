import { type Request, type Response, type NextFunction } from 'express'
import path from 'path'

class ImagensController {
  getImagens (req: Request, res: Response, next: NextFunction): void {
    const { img } = req.params
    res.sendFile(path.resolve(`src/imgs/${img}.png`))
  }
}

export default ImagensController
