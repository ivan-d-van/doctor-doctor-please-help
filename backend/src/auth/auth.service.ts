import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { GenericError } from 'src/errors/errors.generic';
import { ErrorCode } from 'src/errors/errors.code';
import { LoginDto, RegisterDto } from 'src/clients/clients.dto';
import { Client } from 'src/persistence/schemas/client.schema';
import { Doctor } from 'src/persistence/schemas/doctor.schema';
import { TokenData } from './auth.dto';

@Injectable()
export class AuthService {
    constructor(@Inject(JwtService) private readonly jwt: JwtService) {}

    public async register(
        body: RegisterDto,
        model: Model<Client | Doctor>
    ): Promise<string> {
        const { password, ...tokenData } = body;

        const user = await model.findOne({
            where: { email: tokenData.email }
        });

        if (user) {
            throw new GenericError(ErrorCode.UserAlreadyExists);
        }

        const salt: string = bcrypt.genSaltSync(10);
        const passwordHash = bcrypt.hashSync(password, salt);
        const newUser = await model.create({ ...body, passwordHash });
        await newUser.save();

        return this.jwt.sign(tokenData);
    }

    public async validateUser(
        body: LoginDto,
        repository: Model<Client | Doctor>
    ): Promise<Client | Doctor | never> {
        const { email, password }: LoginDto = body;
        const user = await repository.findOne({ where: { email } });

        if (!user) throw new GenericError(ErrorCode.IncorrectCredentials);

        const isPasswordValid: boolean = bcrypt.compareSync(
            password,
            user.passwordHash
        );

        if (!isPasswordValid) {
            throw new GenericError(ErrorCode.IncorrectCredentials);
        }

        return user;
    }

    public async sign(tokenData: TokenData): Promise<string> {
        return this.jwt.sign(tokenData);
    }
}
