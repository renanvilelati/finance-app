import z from 'zod';
import { GetUserByIdUseCase } from '../use-cases/get-user-by-id.js';
import { badRequest, notFound, ok, serverError } from './helpers.js';

export class GetUserByIdController {
  async execute(httpRequest) {
    try {
      const schema = z.uuid();

      const parsedSchema = schema.safeParse(httpRequest.params.userId);
      if (!parsedSchema.success) {
        return badRequest('Invalid userId');
      }

      const getUserByIdUseCase = new GetUserByIdUseCase();

      const user = await getUserByIdUseCase.execute(parsedSchema.data);

      if (!user) {
        return notFound('User not found');
      }

      return ok(user);
    } catch (error) {
      console.error('Error:', error);
      return serverError();
    }
  }
}
