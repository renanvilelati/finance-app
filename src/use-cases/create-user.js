import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import { PostgresCreateUserRepository } from '../repositories/postgres/create-user.js';

export class CreateUserUseCase {
  async execute(createUserParams) {
    // Verificar se existe usuário cadastrado no banco

    // Gerar ID do usuário
    const userId = uuidv4();

    // Criptografat a senha
    const hashedPassword = await bcrypt.hash(createUserParams.password, 10);

    console.log('hashedPassword', hashedPassword);

    // Inserir o usuário no banco de dados
    const user = {
      ...createUserParams,
      id: userId,
      password: hashedPassword,
    };

    // Chamar repositório
    const postgresCreateUserRepository = new PostgresCreateUserRepository();

    const createdUser = await postgresCreateUserRepository.execute(user);

    return createdUser;
  }
}
