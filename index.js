import 'dotenv/config.js';
import express, { json } from 'express';
import { PostgresHelper } from './src/db/postgres/helper.js';

const app = express();
app.use(json());

const PORT = process.env.PORT;

app.get('/api/users', async (req, res) => {
  const results = await PostgresHelper.query('SELECT * FROM users;');

  res.json({
    data: results,
  });
});

app.post('/api/users', async (req, res) => {
  res.status(201).json({
    name: req.body.name,
    email: req.body.email,
  });
});

app.listen(PORT, () => {
  console.log(`Conectaco na porta ${PORT}`);
});
