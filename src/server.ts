import 'reflect-metadata';
import express, { Request, Response } from 'express';
import { container } from 'tsyringe';
import UserRepo from './repositories/UserRepo';
const app = express();
import UserRoutes from './routes/User';

app.use(express.json());

app.get('/', function (request, response) {
    response.send('Hello World');
});


app.use('/user', UserRoutes);



export default app;