import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/tasks (POST)', async () => {
    const requestBody = {
      priority: 'low',
      skills: ['skill1', 'skill2']};
    const res = await request(app.getHttpServer())
      .post('/tasks')
      .send(requestBody);
    expect(res.status).toBe(201);
  });

  it('/tasks/:id (PUT) 404 - not found', async () => {
    const requestBody = { completed: true }
    const res = await request(app.getHttpServer())
      .put('/tasks/1')
      .send(requestBody);
    expect(res.status).toBe(404);
  });

  it('/agents (GET)', async () => {
    const res = await request(app.getHttpServer()).get('/agents');
    expect(res.status).toBe(200);
    expect(res.body).toMatchSnapshot();
  });
});


// it('/tasks (GET)', async () => {
//   const res = await request(app.getHttpServer()).get('/tasks');
//   expect(res.status).toBe(200);
//   expect(res.body).toEqual([]);
// });
