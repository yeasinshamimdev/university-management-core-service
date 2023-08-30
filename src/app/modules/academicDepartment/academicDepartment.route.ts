import express from 'express';
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
  validateRequest(AcademicDepartmentZodValidation.create),
  AcademicDepartmentController.insetIntoDB
);

export const AcademicDepartmentRoutes = router;
