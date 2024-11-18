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
import {
    createContactsSchema,
    updateContactSchema,
  } from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';

import { authenticate } from '../middlewares/authenticate.js';

import { authorization } from '../middlewares/authorization.js';

const Crouter = Router();

Crouter.use(authenticate);

Crouter.use(authorization);

Crouter.get('/', ctrlWrapper(getAllContactsController));

Crouter.get(
    '/:contactId',
    isValidId,
    ctrlWrapper(getContactByIdController),
  );

  Crouter.post(
    '/',
    validateBody(createContactsSchema),
    ctrlWrapper(createContactController),
  );

  Crouter.patch(
    '/:contactId',
    isValidId,
    validateBody(updateContactSchema),
    ctrlWrapper(updateContactController),
  );

  Crouter.delete(
    '/:contactId',
    isValidId,
    ctrlWrapper(deleteContactController),
  );

  Crouter.put(
    '/:contactId',
    isValidId,
    validateBody(createContactsSchema),
    ctrlWrapper(upsertContactController),
  );

  export default Crouter;
