import 'dotenv/config.js';
import express, { json } from 'express';
import { CreateUserController } from './src/controllers/create-user.js';
import { GetUserByIdController } from './src/controllers/get-user-by-id.js';

const app = express();
app.use(json());

const PORT = process.env.PORT;

app.post('/api/users', async (request, response) => {
  const createUserController = new CreateUserController();

  const { status, data, message } = await createUserController.execute(request);

  response.status(status).json({
    data,
    message,
  });
});

app.get('/api/users/:userId', async (request, response) => {
  const getUserController = new GetUserByIdController();

  const { status, data, message } = await getUserController.execute(request);

  response.status(status).json({
    data,
    message,
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
