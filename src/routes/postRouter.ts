import { Router } from 'express';
import { body, param } from 'express-validator';
import postController from '../controllers/postController';

const postRouter = Router();

postRouter
  .route('/')
  .get(
    body('author')
      .notEmpty()
      .bail()
      .isLength({
        min: 2,
        max: 255,
      })
      .bail()
      .isString()
  )
  .post();

postRouter.route('/:id').get().put().delete();

export default postRouter;
