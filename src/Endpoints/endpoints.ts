import express from 'express';
import controller from '../Controllers/ml_controller'

const endpoints = express();

endpoints.get('/ping', controller.sampleHealthCheck);

endpoints.get('/api/items', controller.getItems)


export default endpoints;