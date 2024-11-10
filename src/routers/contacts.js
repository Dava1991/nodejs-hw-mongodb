import { Router } from 'express';
import {
  createContactController,
  deleteContactController,
  getAllContactsController,
  getContactByIdController,
  updateContactController,
  upsertContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getAllContactsController));

router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));

router.post('/contacts', validateBody(createContactsSchema), ctrlWrapper(createContactController));

router.patch('/contacts/:contactId', validateBody(updateContactSchema), ctrlWrapper(updateContactController));

router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));

router.put('/contacts/:contactId', ctrlWrapper(upsertContactController));

export default router;
