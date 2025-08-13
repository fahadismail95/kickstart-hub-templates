import { Router } from 'express'
import { homeController, apiDataController } from '../controllers/homeController'
const router = Router()
router.get('/', homeController)
router.get('/api/data', apiDataController)
export default router
