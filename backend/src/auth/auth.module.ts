import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { MongooseModule } from '@nestjs/mongoose';
import { Doctor } from 'src/persistence/schemas/doctor.schema';
import { Client } from 'src/persistence/schemas/client.schema';
import { AuthService } from './auth.service';
import { AuthHelper } from './auth.helper';
import { JwtStrategy } from './strategies/jwt.strategy';
import { jwt } from 'src/config';

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: jwt.secretKey,
            signOptions: { expiresIn: jwt.ttl + 's' }
        }),
        MongooseModule.forFeature([
            { name: Doctor.name, schema: Doctor },
            { name: Client.name, schema: Client }
        ])
    ],
    controllers: [],
    providers: [AuthService, AuthHelper, JwtStrategy],
    exports: [AuthService]
})
export class AuthModule {}
