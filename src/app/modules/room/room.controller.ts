import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { RoomService } from './room.service';

const insetIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await RoomService.insetIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Room insert successful',
    data: result,
  });
});

export const RoomController = {
  insetIntoDB,
};
