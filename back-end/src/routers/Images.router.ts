import { Router } from 'express'
import imagesController from '../controllers/Images.controller'

const router = Router()

router.get('/project-details/:imgName', imagesController.getProjectDetailsImages)
router.get('/projects', imagesController.getProjectsImages)

export default router
