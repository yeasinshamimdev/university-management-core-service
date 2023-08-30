import express from 'express';
import { AcademicFacultyController } from './academicFaculty.controller';

const router = express.Router();

router.get('/:id', AcademicFacultyController.getSingleFaculty);
router.get('/', AcademicFacultyController.getAllFaculty);
router.post('/create', AcademicFacultyController.insertIntoDB);

export const AcademicFacultyRoutes = router;
