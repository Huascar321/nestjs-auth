import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    console.log('Before...');
    const controllerClass = context.getClass();
    const controllerPath = this.reflector.get<string>('path', controllerClass);
    const request = context.switchToHttp().getRequest();
    const method = request.method;
    console.log('controllerPath: ', controllerPath);
    console.log('method: ', method);
    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => console.log(`After... ${Date.now() - now}ms`)));
  }
}
