import { ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { verify } from 'jsonwebtoken';
import { AppError } from 'src/errors/AppError';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class UserAuthGuard extends AuthGuard('jwt') {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    try {
      const token = context
        .switchToHttp()
        .getRequest()
        .headers.authorization?.split(' ')[1];
      const verifyTokenResponse = verify(token, process.env.BCRYPT_KEY);

      const payload = {
        user_id: verifyTokenResponse['user_id'],
      };

      request['user'] = payload;

      const { method } = context.switchToHttp().getRequest();
      if (
        (method == 'POST' || method == 'PATCH' || method == 'DELETE') &&
        !verifyTokenResponse['is_admin']
      ) {
        throw new AppError('Acesso não autorizado para este recurso!', 401);
      }

      return true;
    } catch (error) {
      throw new AppError('Acesso não autorizado!', 401);
    }
  }
}
