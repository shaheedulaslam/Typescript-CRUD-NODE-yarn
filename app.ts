import express from 'express';
const app = express();
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import { router } from './Router';
dotenv.config()



mongoose.connect(process.env.MONGO_URL as string)

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to mongooose'))



app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',router)

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
