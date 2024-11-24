import request from 'supertest';
import { application, ShutDown } from '../../src/server';

describe('Application', () => {
    afterAll((done) => {
        ShutDown(done);
    });

    it('Starts and has proper Test environment', () => {
        expect(process.env.NODE_ENV).toBe('test');
        expect(application).toBeDefined();
    }),
        1000;

    it('Returns all options allowed when called from the HTTP method options', async () => {
        const response = await request(application).options('/');

        expect(response.status).toBe(200);
        expect(response.headers['access-control-allow-methods']).toBe('PUT, POST, PATCH, DELETE, GET');
    }, 10000);

    it("Returns 404 when route doesn't exist", async () => {
        const res = await request(application).get('/arbitraty/route');

        expect(res.status).toBe(404);
    }, 1000);
});
