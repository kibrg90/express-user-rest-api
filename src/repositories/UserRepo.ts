import 'reflect-metadata';
import { injectable, inject } from "tsyringe";
import UserRepoInterface from "./interfaces/UserRepoInterface";
import { Database } from 'better-sqlite3';
import User from './types/User';

@injectable()
export default class UserRepoSQLite implements UserRepoInterface {
    constructor(@inject('DB') private db: Database) {

    }
    create(attributes: Omit<User, 'id'>): User {
        const statement = this.db.prepare('INSERT INTO users (name, email) VALUES (?, ?)');
        const result = statement.run(attributes.name, attributes.email);

        return { id: Number(result.lastInsertRowid), ...attributes };
    }

    update(id: Number, attributes: Omit<User, 'id'>): User | null {
        const statement = this.db.prepare('UPDATE users SET name = ?, email = ? WHERE id = ?');
        const result = statement.run(attributes.name, attributes.email, id);

        return this.findById(id);
    }

    remove(id: Number): boolean {
        const statement = this.db.prepare('DELETE FROM users WHERE id = ?');
        const result = statement.run(id);
        
        return result.changes > 0;
    }

    findById(id: Number): User | null {
        const statement = this.db.prepare('SELECT * FROM users WHERE id = ?');

        return statement.get(id) as User | null;
    }

    findByEmail(email: string): User | null {
        const statement = this.db.prepare('SELECT * FROM users WHERE email = ?');

        return statement.get(email) as User | null;
    }

    findAll(): User[] {
        const statement = this.db.prepare('SELECT * FROM users');

        return statement.all() as User[];
    }
}