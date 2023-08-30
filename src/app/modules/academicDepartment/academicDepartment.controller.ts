import { AcademicDepartment } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { AcademicDepartmentFilterAbleField } from './academicDepartment.constants';
import { AcademicDepartmentService } from './academicDepartment.service';

const insetIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicDepartmentService.insetIntoDB(req.body);
  sendResponse<AcademicDepartment>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic semester created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, AcademicDepartmentFilterAbleField);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

  const result = await AcademicDepartmentService.getAllFromDB(filters, options);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Retrieve all academic semester successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleAcademicDepartmentById = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await AcademicDepartmentService.getSingleAcademicDepartmentById(
        req.params.id
      );
    sendResponse<AcademicDepartment>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Retrieve single academic semester successfully',
      data: result,
    });
  }
);

export const AcademicDepartmentController = {
  insetIntoDB,
  getAllFromDB,
  getSingleAcademicDepartmentById,
};
