import { type Request, type Response } from 'express'

interface IImagesController {
  getProjectDetailsImages: (req: Request, res: Response) => void
  getProjectsImages: (req: Request, res: Response) => void
}

export default IImagesController
