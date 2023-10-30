import { Router } from 'express';
import ImagesController from '../controllers/Images.controller';
const imagesController = new ImagesController();
const router = Router();
router.get('/project-details/:imgName', imagesController.getProjectDetailsImages);
router.get('/projects', imagesController.getProjectsImages);
export default router;
