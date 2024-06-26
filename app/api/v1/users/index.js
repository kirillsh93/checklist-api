import { Router } from 'express';

import * as controller from './controller.js';

export const router = Router();

/*
 * /api/users/ POST      - CREATE
 * /api/users/ GET       - READ ALL
 * /api/users/:id GET    - READ ONE
 * /api/users/:id PUT    - UPDATE
 * /api/users/:id DELETE - DELETE
 */

router.route('/').post(controller.create).get(controller.all);

router.param('id', controller.id);

router
  .route('/:id')
  .get(controller.read)
  .put(controller.update)
  .delete(controller.remove);
