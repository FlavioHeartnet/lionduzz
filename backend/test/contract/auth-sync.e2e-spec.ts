import request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './../../src/app.module';
import { INestApplication } from '@nestjs/common';

describe('AuthController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/auth/sync (POST)', () => {
    return request(app.getHttpServer())
      .post('/auth/sync')
      .send({ idToken: 'test' })
      .expect(401);
  });

  afterAll(async () => {
    await app.close();
  });
});
