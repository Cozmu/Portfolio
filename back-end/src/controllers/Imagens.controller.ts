import { type Request, type Response } from 'express'
import type IImagensController from './interfaces/IImagens.controller'
import obterArquivosPNGDoDiretorio from '../services/Imagens.service'
import AdmZip from 'adm-zip'
import path from 'path'

class ImagensController implements IImagensController {
  getAllImagens (req: Request, res: Response): void {
    const { imgName } = req.params
    const zip = new AdmZip()

    const { files, directory } = obterArquivosPNGDoDiretorio(imgName)
    files.forEach(file => {
      const filePath = path.join(directory, file)
      zip.addLocalFile(filePath)
    })

    const zipBuffer = zip.toBuffer()
    res.set('Content-Disposition', 'attachment; filename=arquivos.zip')
    res.set('Content-Type', 'application/zip')
    res.status(200).send(zipBuffer)
  }
}

export default ImagensController
