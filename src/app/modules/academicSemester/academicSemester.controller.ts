import { AcademicSemester } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { AcademicSemesterFilterAbleField } from './academicSemester.constants';
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
  const filters = pick(req.query, AcademicSemesterFilterAbleField);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

  const result = await AcademicSemesterService.getAllFromDB(filters, options);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Retrieve all academic semester successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleAcademicSemesterById = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AcademicSemesterService.getSingleAcademicSemesterById(
      req.params.id
    );
    sendResponse<AcademicSemester>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Retrieve single academic semester successfully',
      data: result,
    });
  }
);

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AcademicSemesterService.updateOneInDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semster updated successfully',
    data: result,
  });
});

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AcademicSemesterService.deleteByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semster delete successfully',
    data: result,
  });
});

export const AcademicSemesterController = {
  insetIntoDB,
  getAllFromDB,
  getSingleAcademicSemesterById,
  updateOneInDB,
  deleteByIdFromDB,
};
