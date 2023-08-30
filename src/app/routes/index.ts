import express from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { AcademicFacultyRoutes } from '../modules/acdemicFaculty/academicFaculty.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculty',
    route: AcademicFacultyRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
