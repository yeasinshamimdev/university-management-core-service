import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';
import { AcademicSemesterZodValidation } from './academicSemester.validation';
const router = express.Router();

router.get('/', AcademicSemesterController.getAllFromDB);

router.post(
  '/create',
  validateRequest(AcademicSemesterZodValidation.create),
  AcademicSemesterController.insetIntoDB
);

export const AcademicSemesterRoutes = router;
