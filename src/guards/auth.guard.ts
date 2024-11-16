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
    try {
      const token = context
        .switchToHttp()
        .getRequest()
        .headers.authorization?.split(' ')[1];
      const valid = verify(token, process.env.BCRYPT_KEY);

      const req = context.switchToHttp().getRequest().originalUrl.split('/')[0];
      console.log('valid', valid, 'router:', req);

      /* 
      if (!validPathsRouter[type].includes(req)) {
        console.log('data do login:', validPathsRouter[type], req);
        //throw new AppError('Acesso não autorizado!', 401);
      }

      context.switchToHttp().getRequest()[valid['type']] = newParams; */

      return true;
    } catch (error) {
      console.log(error);

      throw new AppError('Acesso não autorizado!', 401);
      return false;
    }
  }
}
