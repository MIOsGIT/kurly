import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { Payload } from './payload';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) {}
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request: Request = context.switchToHttp().getRequest();
        const token = request.headers?.authorization?.split("Bearer ");
        if (!token) return false;
        const jwt = token[1];
        
        try{
            const payload: Payload = this.jwtService.verify(jwt, {
                secret: 'SECRET',
            });
            request.headers['id'] = payload.id.toString();
            return true;
        } catch (e) {
            switch (e.name) {
                case 'TokenExpiredError':
                    throw new UnauthorizedException('토큰이 만료되었습니다.');
                case 'JsonWebTokenError':
                    throw new UnauthorizedException('유효하지 않은 토큰입니다.');
                default:
                    console.error(e);
                    throw new UnauthorizedException('인증 처리 중 오류가 발생했습니다.');
            }
        }
    }
}