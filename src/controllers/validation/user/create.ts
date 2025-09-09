import { body } from 'express-validator';
import { container } from 'tsyringe';
import UserRepoInterface from '../../../repositories/interfaces/UserRepoInterface';

export const createUserValidation = [
    body('email').isEmail().withMessage('Valid email is required')
        .custom(value => {
            const userRepo = container.resolve(UserRepoInterface);
            if (userRepo.findByEmail(value)) {
                return Promise.reject('Email already in use.');
            }
            return true;
        }),
    body('name').isString().withMessage('Name must be a string'),
];