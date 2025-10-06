import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './../../src/app.module';
import { INestApplication } from '@nestjs/common';

describe('SaleController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/sales (GET)', () => {
    return request(app.getHttpServer())
      .get('/sales')
      .expect(401);
  });

  afterAll(async () => {
    await app.close();
  });
});
