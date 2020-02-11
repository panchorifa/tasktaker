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

  it('/tasks (POST)', () => {
    const requestBody = {
      priority: 0, // Low priority
      skills: ['skill1', 'skill2']
    }
    return request(app.getHttpServer())
      .post('/tasks')
      .send(requestBody)
      .expect(201)
  });

  it('/tasks/:id (PUT)', () => {
    const requestBody = { completed: true }
    return request(app.getHttpServer())
      .put('/tasks/1')
      .send(requestBody)
      .expect(200)
  });

  it('/tasks (GET)', () => {
    return request(app.getHttpServer())
      .get('/tasks')
      .expect(200)
      .expect([])
  });

  it('/agents (GET)', () => {
    return request(app.getHttpServer())
      .get('/agents')
      .expect(200)
      .expect([])
  });

});
