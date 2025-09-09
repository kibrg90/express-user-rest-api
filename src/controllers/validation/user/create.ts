import {body} from 'express-validator';

export const createUserValidation = [
    body('email').isEmail().withMessage('Valid email is required'),
    body('name').isString().withMessage('Name must be a string'),
];