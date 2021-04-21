import { Router } from 'express';
import * as formResponseController from './controllers/formsResponses/formResponsesController';

const router = Router();

router.get('/example', formResponseController.getForm);
router.get('/developerResponses', formResponseController.developerResponses);

export default router;