import express from 'express';
import controller from '../controllers/sample'

const router = express();

router.get('/ping', controller.sampleHealthCheck);

router.get('/api/items', controller.getItems)


export default router;