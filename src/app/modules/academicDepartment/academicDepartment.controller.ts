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
    message: 'Academic department created successfully',
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
    message: 'Retrieve all academic department successfully',
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
      message: 'Retrieve single academic department successfully',
      data: result,
    });
  }
);

const updateIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicDepartmentService.updateIntoDB(
    req.params.id,
    req.body
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Updated successful',
    data: result,
  });
});

const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
  await AcademicDepartmentService.deleteFromDB(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'student deleted',
  });
});

export const AcademicDepartmentController = {
  insetIntoDB,
  getAllFromDB,
  getSingleAcademicDepartmentById,
  updateIntoDB,
  deleteFromDB,
};
