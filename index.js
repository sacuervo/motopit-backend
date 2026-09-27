require('dotenv').config();
const express = require('express');
const conectarDB = require('./config/db.js');
const authRoutes = require('./routes/auth.routes.js');

const app = express();

conectarDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API de MotoPit funcionando' });
});

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http:localhost:${PORT}`);
});
