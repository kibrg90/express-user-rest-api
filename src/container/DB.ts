import Database from 'better-sqlite3';
import path from 'path';

export function createDB(): Database {
    // Use path.resolve to create a path relative to your project root
    const dbPath = path.resolve(__dirname, '../database/sqlite.sqlite');
    console.log(`SQLite database path: ${dbPath}`); 
    const db = new Database(dbPath);
    console.log('SQLite database connected');

    db.prepare(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email VARCHAR(255) UNIQUE,
        name VARCHAR(64)
    )`).run();
    console.log('SQLite users table ensured');

    return db;
}