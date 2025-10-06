import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './../../src/app.module';
import { INestApplication } from '@nestjs/common';

describe('ProductController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/products (POST)', () => {
    return request(app.getHttpServer())
      .post('/products')
      .send({ name: 'test', description: 'test', price: 10, type: 'course' })
      .expect(401);
  });

  afterAll(async () => {
    await app.close();
  });
});
