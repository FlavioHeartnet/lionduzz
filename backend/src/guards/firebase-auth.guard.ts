import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseAuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const idToken = request.headers.authorization?.split('Bearer ')[1];
    if (!idToken) {
      return false;
    }
    return admin.auth().verifyIdToken(idToken).then(decodedToken => {
      request.user = decodedToken;
      return true;
    }).catch(() => {
      return false;
    });
  }
}
