import express, { Request, Response } from 'express';
import UserRoutes from './routes/User';
const app = express();

app.get('/', function (request, response) {
    response.send('Hello World');
});

app.use('/user', UserRoutes);

export default app;