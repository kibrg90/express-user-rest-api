import User from './types/UserInterface';

export default class UserRepo {
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
        const record = this.findByIdUnsafe(id);

        return record ? { ...record } : null;
    }

    findAll(): User[] {
        return this.users.map((user) => ({ ...user }));
    }

    findByIdUnsafe(id: Number) {
        const record = this.users.find((user) => user.id === id);
        if (record) {
            return record;
        }

        return null;
    }
}