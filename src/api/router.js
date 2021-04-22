import { Router } from 'express';
import responseMiddleware from '../middlewares/responses';
import * as formResponseController from './controllers/formsResponses/formResponsesController';

const router = Router();
router.use(responseMiddleware());

// Routes
router.get('/developerResponses', formResponseController.developerResponses);
router.get('/clientResponses', formResponseController.clientResponses);

export default router;