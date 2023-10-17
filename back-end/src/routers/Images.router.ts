import { Router } from 'express'
import ImagensController from '../controllers/Imagens.controller'

const imagensController = new ImagensController()

const router = Router()

router.get('/:imgName', imagensController.getImagens)

export default router
