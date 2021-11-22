const express = require('express');
const { uuid } = require('uuidv4');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json({ extended: false }));

//Server tra ve` list danh sach cac viec can lam
const listTodo = [
  {
    id: 1,
    message: 'Di lam'
  },
  {
    id: 2,
    message: 'An com 2'
  }
];

// Tao api xuat ra
app.get('/api/list-todo', (req, res) => {
  res.status(200).json(listTodo);
});
//Tao Api Tao todo
app.post('/api/update-todo', (req, res) => {
  const newTodo = {
    id: uuid(),
    message: req.body.message
  };

  listTodo.push(newTodo);
  const result = { status: 1, listTodo: listTodo };
  res.status(201).json(result);
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});
