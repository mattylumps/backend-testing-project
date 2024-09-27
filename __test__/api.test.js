const request = require('supertest');
const app = require('../src/app');

describe('API Routes', () => {
it('should return 200 OK for /api route', async () => {
const res = await request(app).get('/api');
expect(res.status).toBe(200);
});

it('should return JSON response for /api route', async () => {
const res = await request(app).get('/api');
expect(res.body).toHaveProperty('message', 'Hello from the API route!');
});

it('should return 200 OK for / route', async () => {
const res = await request(app).get('/');
expect(res.status).toBe(200);
});

it('should return JSON response for / route', async () => {
const res = await request(app).get('/');
expect(res.body).toHaveProperty('message', 'Hello from the backend!');
});
});