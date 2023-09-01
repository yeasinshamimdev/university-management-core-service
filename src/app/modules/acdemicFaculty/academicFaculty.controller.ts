import { AcademicFaculty } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { AcademicSemesterFilterAbleField } from '../academicSemester/academicSemester.constants';
import { AcademicFacultyService } from './academicFaculty.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicFacultyService.insertIntoDB(req.body);
  sendResponse<AcademicFaculty>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic faculty created successfully',
    data: result,
  });
});

const getAllFaculty = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, AcademicSemesterFilterAbleField);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

  const result = await AcademicFacultyService.getAllFaculty(filters, options);

  sendResponse<AcademicFaculty[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Retrieve all faculty successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleFaculty = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicFacultyService.getSingleFaculty(req.params.id);
  sendResponse<AcademicFaculty>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'single academic faculty retrieved successfully',
    data: result,
  });
});

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AcademicFacultyService.updateOneInDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'AcademicFaculty updated successfully',
    data: result,
  });
});

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AcademicFacultyService.deleteByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'AcademicFaculty delete successfully',
    data: result,
  });
});

export const AcademicFacultyController = {
  getAllFaculty,
  insertIntoDB,
  getSingleFaculty,
  updateOneInDB,
  deleteByIdFromDB,
};
