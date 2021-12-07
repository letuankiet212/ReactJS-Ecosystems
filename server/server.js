const express = require('express');
require('dotenv').config;
const { uuid } = require('uuidv4');
const cors = require('cors');

const app = express();
app.use(express.json({ extended: false }));
app.use(cors());

//API

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});
