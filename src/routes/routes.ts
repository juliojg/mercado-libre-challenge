import express from 'express';
import controller from '../controllers/ml_controller'

const router = express();

router.get('/ping', controller.sampleHealthCheck);

router.get('/api/items', controller.getItems)


export default router;