import User from '../types/User';

export default interface UserRepoInterface {
    create(attributes: Omit<User, 'id'>): User;

    update(id: Number, attributes: Omit<User, 'id'>): User | null;

    remove(id: Number): boolean;

    findById(id: Number): User | null;

    findByEmail(email: String): User | null;

    findAll(): User[];
}