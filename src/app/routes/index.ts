import express from 'express';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { AcademicFacultyRoutes } from '../modules/acdemicFaculty/academicFaculty.route';
import { BuildingRouter } from '../modules/building/building.route';
import { CourseRouter } from '../modules/course/course.route';
import { facultyRoutes } from '../modules/faculty/faculty.route';
import { offeredCourseRoutes } from '../modules/offeredCourse/offeredCourse.route';
import { offeredCourseClassScheduleRoutes } from '../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.route';
import { offeredCourseSectionRoutes } from '../modules/offeredCourseSection/offeredCourseSection.route';
import { RoomRouter } from '../modules/room/room.route';
import { semesterRegistrationRoutes } from '../modules/semesterRegistration/semesterRegistration.route';
import { studentRoutes } from '../modules/student/student.route';

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
  {
    path: '/academic-department',
    route: AcademicDepartmentRoutes,
  },
  {
    path: '/faculties',
    route: facultyRoutes,
  },
  {
    path: '/students',
    route: studentRoutes,
  },
  {
    path: '/building',
    route: BuildingRouter,
  },
  {
    path: '/room',
    route: RoomRouter,
  },
  {
    path: '/course',
    route: CourseRouter,
  },
  {
    path: '/semester-registration',
    route: semesterRegistrationRoutes,
  },
  {
    path: '/offered-course',
    route: offeredCourseRoutes,
  },
  {
    path: '/offered-course-section',
    route: offeredCourseSectionRoutes,
  },
  {
    path: '/offered-course-class-schedule',
    route: offeredCourseClassScheduleRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
