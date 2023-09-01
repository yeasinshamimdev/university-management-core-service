import { Room } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insetIntoDB = async (data: Room): Promise<Room> => {
  const result = await prisma.room.create({
    data,
    include: {
      building: true,
    },
  });
  return result;
};

const getAllData = async () => {
  const result = await prisma.room.findMany();
  return result;
};

export const RoomService = {
  insetIntoDB,
  getAllData,
};
