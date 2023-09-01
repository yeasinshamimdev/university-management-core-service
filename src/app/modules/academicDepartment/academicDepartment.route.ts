import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentController } from './academicDepartment.controller';
import { AcademicDepartmentZodValidation } from './academicDepartment.validation';
const router = express.Router();

router.get(
  '/:id',
  AcademicDepartmentController.getSingleAcademicDepartmentById
);

router.get('/', AcademicDepartmentController.getAllFromDB);

router.post(
  '/create',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(AcademicDepartmentZodValidation.create),
  AcademicDepartmentController.insetIntoDB
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(AcademicDepartmentZodValidation.update),
  AcademicDepartmentController.updateIntoDB
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicDepartmentController.deleteFromDB
);

export const AcademicDepartmentRoutes = router;
