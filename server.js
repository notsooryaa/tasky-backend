require('dotenv').config();
const express = require('express');
const connectDB = require('./src/utils/db');
const app = express();
const port = process.env.PORT;

connectDB();

app.use(express.json());

app.use('/api', require('./src/routes'));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});