import "reflect-metadata";
import express, { Router, Request, Response } from "express";
import { container } from 'tsyringe';
import UserController from "../controllers/UserController";
import { validateRequest } from "../middlewares/validateRequest";
import { createUserValidation } from "../controllers/validation/user/create";

const router = Router();
const userController = container.resolve(UserController);
router.use(express.json());

router.post(
    '/',
    createUserValidation,
    validateRequest,
    (request: Request, response: Response) => {
        console.log("request", request.body);
        return response.json(
            userController.create(request, response)
        );
    }
);

router.post('/', (request: Request, response: Response) => {
    console.log("request", request.body);
    return response.json(
        userController.create(request, response)
    );
});

router.get('/', (request: Request, response: Response) => {
    console.log("request", request.body);
    return response.json(
        userController.list(request, response)
    );
});

router.patch('/', (request: Request, response: Response) => {
    console.log("request", request.body);
    return response.json(
        userController.update(request, response)
    );
});

router.delete('/', (request: Request, response: Response) => {
    console.log("request", request.body);
    return response.json(
        userController.delete(request, response)
    );
});

export default router;