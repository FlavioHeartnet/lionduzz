import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../models/user.entity';
import * as admin from 'firebase-admin';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async validateUser(idToken: string): Promise<any> {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const { email, name } = decodedToken;
    let user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      user = await this.userRepository.save({ email, name, role: 'customer' });
    }
    return user;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    // In a real app, you'd return a JWT here.
    // For this example, we'll just return the user.
    return user;
  }
}
