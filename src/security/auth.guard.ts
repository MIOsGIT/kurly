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
            if(e.name === 'Invalid Signature') {
                throw new UnauthorizedException(e.name)
            }
            console.log(e);
            return false;
        }
    }
}