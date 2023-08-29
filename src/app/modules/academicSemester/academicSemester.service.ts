import {
  AcademicFaculty,
  AcademicSemester,
  PrismaClient,
} from '@prisma/client';
import { IGenericResponse } from '../../../interfaces/common';

const prisma = new PrismaClient();

const insetIntoDB = async (
  data: AcademicSemester
): Promise<AcademicSemester> => {
  const result = await prisma.academicSemester.create({
    data,
  });
  return result;
};

const getAllFromDB = async (): Promise<IGenericResponse<AcademicFaculty[]>> => {
  const result = await prisma.academicSemester.findMany();
  const total = await prisma.academicSemester.count();

  return {
    meta: {
      total,
      page: 1,
      limit: 10,
    },
    data: result,
  };
};

export const AcademicSemesterService = {
  insetIntoDB,
  getAllFromDB,
};
