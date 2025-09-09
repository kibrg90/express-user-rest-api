import "reflect-metadata";;
import express, { Request, Response } from 'express';
import UserRepoSQLite from "./repositories/UserRepo";
import UserRepoInterface from "./repositories/interfaces/UserRepoInterface";
import {container} from 'tsyringe';
import { createDB } from './container/DB';
const db = createDB();
container.registerInstance('DB', db);
import UserRoutes from './routes/User';

const app = express();

app.get('/', function (request, response) {
    response.send('Hello World');
});


container.register<UserRepoInterface>(UserRepoInterface, UserRepoSQLite);
app.use('/user', UserRoutes);

export default app;