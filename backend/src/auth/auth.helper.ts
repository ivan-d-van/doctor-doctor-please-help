import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';
import { Doctor } from 'src/persistence/schemas/doctor.schema';
import { Client } from 'src/persistence/schemas/client.schema';
import { TokenData } from './auth.dto';
import { GenericError } from 'src/errors/errors.generic';
import { ErrorCode } from 'src/errors/errors.code';

@Injectable()
export class AuthHelper {
    constructor(
        @Inject(JwtService)
        private readonly jwt: JwtService
    ) {}

    public async decode(token: string): Promise<TokenData> {
        return this.jwt.decode(token, null) as TokenData;
    }

    public generateToken(signData: TokenData): string {
        return this.jwt.sign(signData);
    }

    public encodePassword(password: string): string {
        const salt: string = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    }

    public async validateUser(
        tokenData: TokenData,
        model: Model<Doctor | Client>
    ): Promise<Doctor | Client> {
        return model.findOne({ where: tokenData });
    }

    async validate(
        token: string,
        model: Model<Doctor | Client>
    ): Promise<boolean | never> {
        const decoded: TokenData = this.jwt.verify(token);
        if (!decoded) throw new GenericError(ErrorCode.IncorrectCredentials);

        const user = await model.findOne({ where: decoded });

        if (!user) throw new GenericError(ErrorCode.IncorrectCredentials);

        return true;
    }
}
