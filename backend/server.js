import express from 'express';
import dotenv from "dotenv"
import cors from 'cors'
import connectDb from './src/config/db.js';
import router from './src/routes/ToDoRouter.js';

const app = express();

dotenv.config();

connectDb() 
app.use(express.json());
app.use(cors())
app.use('/', router)


const PORT = process.env.PORT ||7007;

app.listen(PORT , ()=>{
    console.log(`Your server has been started at http://localhost:${PORT}`)
})