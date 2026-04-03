import 'dotenv/config.js';
import express, { json } from 'express';
import { PostgresHelper } from './src/db/postgres/helper.js';

const app = express();
app.use(json());

const PORT = 3000;

app.get('/', async (req, res) => {
  const results = await PostgresHelper.query('SELECT * FROM users;');

  res.json({
    data: results,
    message: 'Registered users',
  });
});

app.listen(PORT, () => {
  console.log(`Conectaco na porta ${PORT}`);
});
