import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard, IAuthGuard } from '@nestjs/passport';
import { Client } from 'src/persistence/schemas/client.schema';
import { Doctor } from 'src/persistence/schemas/doctor.schema';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') implements IAuthGuard {
    public handleRequest(err: unknown, user: Doctor | Client): any {
        return user;
    }

    public async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        await super.canActivate(context);
        const { user } = context.switchToHttp().getRequest();
        request.user = user;
        return !!user;
    }
}
