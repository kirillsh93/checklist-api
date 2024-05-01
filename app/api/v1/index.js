import { Router } from 'express';

import { router as todos } from './todos/index.js';
import { router as groups } from './groups/index.js';
import { router as users } from './users/index.js';

export const router = Router();

router.use('/todos', todos);
router.use('/groups', groups);
router.use('/users', users);
