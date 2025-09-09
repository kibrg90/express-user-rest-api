import { injectable, inject, delay } from "tsyringe";
import { Request, Response } from 'express';
import User from '../repositories/types/User';
import UserRepoInterface from "../repositories/interfaces/UserRepoInterface";

@injectable()
export default class UserController {
    constructor(@inject(delay(() => UserRepoInterface)) private userRepo: UserRepoInterface) { }

    create(request: Request, response: Response): User {
        return this.userRepo.create(request.body);
    }

    list(request: Request, response: Response): User[] {
        return this.userRepo.findAll();
    }

    update(request: Request, response: Response): User | null {
        const attributes = request.body;
        return this.userRepo.update(attributes.id, attributes);
    }

    delete(request: Request, response: Response): { success: boolean } {
        return { success: this.userRepo.remove(request.body.id) };
    }
}
