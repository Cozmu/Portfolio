import { type Request, type Response } from 'express'
import type IImagensController from './interfaces/IImagens.controller'
import obterArquivosPorNome from '../services/Imagens.service'

class ImagensController implements IImagensController {
  getImagens (req: Request, res: Response): void {
    const { imgName } = req.params
    const getPath = obterArquivosPorNome(imgName)
    getPath.forEach((path) => { res.sendFile(path) }) // fix
  }
}

export default ImagensController
