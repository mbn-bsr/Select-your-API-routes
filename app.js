import express from "express";
import {router} from './routes/users.js';
//console.log(router);
import {
  getUserByID,
  getUsers,
  createUser,
  updateUserByID,
  deleteUserByID,
} from "./models/users.js";
const PORT = 3000;
const app = express();

app.use(express.json());
app.use('/users', router);

app.get('/', (req, res)=>{
  res.send('Peace! everyone peace loving!')
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
