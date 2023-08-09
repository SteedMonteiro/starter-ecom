import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Orders (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/orders (GET)', () => {
    return request(app.getHttpServer())
      .get('/orders')
      .expect(200);
  });

  it('/orders (POST)', () => {
    return request(app.getHttpServer())
      .post('/orders')
      .send({ productId: '1', quantity: 1 })
      .expect(201);
  });

  it('/orders/:id (GET)', () => {
    return request(app.getHttpServer())
      .get('/orders/1')
      .expect(200);
  });

  it('/orders/:id (PUT)', () => {
    return request(app.getHttpServer())
      .put('/orders/1')
      .send({ productId: '1', quantity: 2 })
      .expect(200);
  });

  it('/orders/:id (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/orders/1')
      .expect(200);
  });

  afterAll(async () => {
    await app.close();
  });
});