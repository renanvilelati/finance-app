import { createUserSchema } from '../schemas/user/create-user-schema.js';
import { CreateUserUseCase } from '../use-cases/create-user.js';
import { badRequest, created, serverError } from './helpers.js';
import { EmailAlreadyInUseError } from '../errors/user.js';

export class CreateUserController {
  async execute(httpRequest) {
    try {
      const parsedSchema = createUserSchema.safeParse(httpRequest.body);

      if (!parsedSchema.success) {
        return badRequest(parsedSchema.error.issues[0].message);
      }

      const createdUserUseCase = new CreateUserUseCase();
      const createdUser = await createdUserUseCase.execute(parsedSchema.data);

      return created(createdUser, 'User created successufully');
    } catch (error) {
      if (error instanceof EmailAlreadyInUseError) {
        return badRequest(error.message);
      }

      console.error(`Error: ${error}`);
      return serverError();
    }
  }
}
