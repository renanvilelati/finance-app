import { createUserSchema } from '../schemas/user/create-user-schema.js';
import { CreateUserUseCase } from '../use-cases/create-user.js';
import { badRequest, created, internalServerError } from './helpers.js';

export class CreateUserController {
  async execute(httpRequest) {
    try {
      const parsedSchema = createUserSchema.safeParse(httpRequest.body);

      if (!parsedSchema.success) {
        return badRequest(parsedSchema.error.issues[0].message);
      }

      // Chamar use case
      const createdUserUseCase = new CreateUserUseCase();
      const createdUser = await createdUserUseCase.execute(parsedSchema.data);

      // Retornar o status code
      return created(createdUser, 'User created successufully');
    } catch (error) {
      console.error(`Error: ${error}`);

      return internalServerError('Internal server error');
    }
  }
}
