import { describe, test, expect } from '@jest/globals';
import request from 'supertest';
import app from './src/index';

describe('API tests', () => {
    test('GET /api/stats should return statistics data', async () => {
        const response = await request(app).get('/api/stats');
        expect(response.status).toBe(200);
        expect(response.body.activos).toEqual([60, 90]);
        expect(response.body.monitoreoMes).toEqual([80, 60, 25, 80, 200, 100, 110, 20, 130, 140, 40, 160]);
        expect(response.body.monitoreoTipo).toEqual({
            administrativo: 65,
            ventas: 59,
            marketing: 25,
            soporte: 94,
        });
    });

    test('GET /api/users/landing should return landing page users data', async () => {
        const response = await request(app).get('/api/users/landing');
        expect(response.status).toBe(200);
        expect(response.body.users.length).toBe(20);
        expect(response.body.users[0]).toHaveProperty('name', 'Juan Pérez');
        expect(response.body.users[0]).toHaveProperty('email', 'juan@example.com');
    });

    test('GET /api/history-users should return user history data', async () => {
        const response = await request(app).get('/api/history-users');
        expect(response.status).toBe(200);
        expect(response.body.history.length).toBe(3);
        expect(response.body.history[0]).toHaveProperty('id', 1);
        expect(response.body.history[0]).toHaveProperty('subject', 'Duda sobre precios');
        expect(response.body.history[0]).toHaveProperty('company', 'Google');
    });

    test('POST /api/request/manage should return success message for valid request', async () => {
        const validRequestData = {
            adressee: 'Marketing',
            subject: 'Duda sobre precios',
            description: 'Necesito más información sobre los precios',
        };
        const response = await request(app)
            .post('/api/request/manage')
            .send(validRequestData);
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Request successfully registered');
    });

    test('POST /api/request/manage should return error message for missing fields', async () => {
        const invalidRequestData = {};
        const response = await request(app)
            .post('/api/request/manage')
            .send(invalidRequestData);
        expect(response.status).toBe(400);
        expect(response.body.message).toBe('Adressee, subject and description are required');
    });
});
