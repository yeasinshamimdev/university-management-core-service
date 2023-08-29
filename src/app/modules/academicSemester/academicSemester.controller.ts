import { AcademicSemester } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AcademicSemesterService } from './academicSemester.service';

const insetIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSemesterService.insetIntoDB(req.body);
  sendResponse<AcademicSemester>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic semester created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  console.log(req.query);

  const result = await AcademicSemesterService.getAllFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Retrieve all academic semester successfully',
    meta: result.meta,
    data: result.data,
  });
});

export const AcademicSemesterController = {
  insetIntoDB,
  getAllFromDB,
};
