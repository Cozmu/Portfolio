import { type Request, type Response } from 'express'
import getPNGFilesDirectory from '../services/Imagens.service'
import AdmZip from 'adm-zip'
import path from 'path'

const getProjectDetailsImages = (req: Request, res: Response): void => {
  const { imgName } = req.params
  const zip = new AdmZip()

  const { files, directory } = getPNGFilesDirectory(`^${imgName}(-\\d+)?\\.png$`)
  files.forEach(file => {
    const filePath = path.join(directory, file)
    zip.addLocalFile(filePath)
  })

  const zipBuffer = zip.toBuffer()
  res.set('Content-Disposition', 'attachment; filename=arquivos.zip')
  res.set('Content-Type', 'application/zip')
  res.status(200).send(zipBuffer)
}

const getProjectsImages = (_req: Request, res: Response): void => {
  const filesNames = [
    'Delivery-App',
    'Trybewallet',
    'Recipes-App',
    'Trivia',
    'Car-Shop',
    'Tryber-Futebol-Clube'
  ]
  const zip = new AdmZip()

  const { files, directory } = getPNGFilesDirectory(filesNames)

  console.log('entrou')

  files.forEach(file => {
    const filePath = path.join(directory, file)
    zip.addLocalFile(filePath)
  })

  const zipBuffer = zip.toBuffer()
  res.set('Content-Disposition', 'attachment; filename=arquivos.zip')
  res.set('Content-Type', 'application/zip')
  res.status(200).send(zipBuffer)
}

export default { getProjectDetailsImages, getProjectsImages }
