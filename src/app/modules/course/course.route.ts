import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { CourseController } from './course.controller';
import { CourseValidations } from './course.validation';

const router = express.Router();

router.get('/', CourseController.getAllFromDB);
router.get('/:id', CourseController.getByIdFromDB);

router.post(
  '/',
  validateRequest(CourseValidations.create),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  CourseController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(CourseValidations.update),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  CourseController.updateOneInDB
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  CourseController.deleteByIdFromDB
);

router.post(
  '/:id/assign-faculties',
  validateRequest(CourseValidations.assignOrRemoveFaculties),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  CourseController.assignFaculties
);

router.delete(
  '/:id/remove-faculties',
  validateRequest(CourseValidations.assignOrRemoveFaculties),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  CourseController.removeFaculties
);

export const CourseRouter = router;
