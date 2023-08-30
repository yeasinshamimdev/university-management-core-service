import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyController } from './academicFaculty.controller';
import { AcademicFacultyZodValidation } from './academicFaculty.validation';

const router = express.Router();

router.get('/:id', AcademicFacultyController.getSingleFaculty);
router.get('/', AcademicFacultyController.getAllFaculty);
router.post(
  '/create',
  validateRequest(AcademicFacultyZodValidation.create),
  AcademicFacultyController.insertIntoDB
);

export const AcademicFacultyRoutes = router;
