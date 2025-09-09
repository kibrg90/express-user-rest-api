const request = require('supertest');
const app = require('../server');

describe('Server Functionality', () => {
    it('should respond with status 200 for GET /', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Hello World');
    });

    it('should return JSON for GET /users', async () => {
        const res = await request(app).get('/users');
        expect(res.statusCode).toBe(200);
        expect(res.headers['content-type']).toMatch(/json/);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('should handle 404 for invalid endpoints', async () => {
        const res = await request(app).get('/invalid-endpoint');
        expect(res.statusCode).toBe(404);
    });

    it('should handle POST /user requests', async () => {
        const userData = { name: 'Test User', email: 'test@example.com' };
        const res = await request(app)
            .post('/user')
            .send(userData)
            .set('Accept', 'application/json');
        expect(res.statusCode).toBe(200); // Your endpoint currently returns 200
        expect(res.body).toHaveProperty('id');
        expect(res.body.name).toBe(userData.name);
        expect(res.body.email).toBe(userData.email);
    });
});