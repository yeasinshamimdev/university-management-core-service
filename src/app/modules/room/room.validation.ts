import { z } from 'zod';

const create = z.object({
  body: z.object({
    roomNumber: z.string({
      required_error: 'Title is required',
    }),
    floor: z.string({
      required_error: 'Title is required',
    }),
    buildingId: z.string({
      required_error: 'Title is required',
    }),
  }),
});

const update = z.object({
  body: z.object({
    roomNumber: z.string().optional(),
    floor: z.string().optional(),
    buildingId: z.string().optional(),
  }),
});

export const RoomValidations = {
  create,
  update,
};
