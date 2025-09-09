import User from './types/User';
import UserRepoInterface from './interfaces/UserRepoInterface';

export default class UserRepo implements UserRepoInterface {
    private idCounter = 0;
    private users: User[] = [];

    create(attributes: Omit<User, 'id'>): User {
        const record = { id: ++this.idCounter, ...attributes };
        this.users.push(record);

        return { ...record };
    }

    update(id: Number, attributes: Omit<User, 'id'>): User | null {
        const index = this.users.findIndex((user) => user.id === id);
        if (index === -1) {
            return null;
        }
        this.users[index] = { ...this.users[index], ...attributes };

        return { ...this.users[index] };
    }

    remove(id: Number): boolean {
        const index = this.users.findIndex((user) => user.id === id);
        if (index === -1) {
            return false;
        }
        this.users.splice(index, 1);

        return true;
    }

    findById(id: Number): User | null {
        const record = this.users.find((user) => user.id === id);

        return record ? { ...record } : null;
    }

    findByEmail(email: String): User | null {
        const record = this.users.find((user) => user.email === email);

        return record ? { ...record } : null;
    }

    findAll(): User[] {
        return this.users.map((user) => ({ ...user }));
    }
}