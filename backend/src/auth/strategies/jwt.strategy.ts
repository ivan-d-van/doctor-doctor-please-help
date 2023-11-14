import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Doctor } from 'src/persistence/schemas/doctor.schema';
import { Client } from 'src/persistence/schemas/client.schema';
import { AuthHelper } from '../auth.helper';
import { jwt } from 'src/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject(AuthHelper)
        private readonly authHelper: AuthHelper,
        @InjectModel(Doctor.name)
        private readonly doctorModel: Model<Doctor>,
        @InjectModel(Client.name)
        private readonly clientModel: Model<Client>
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwt.secretKey
        });
    }

    async validate(tokenData: any): Promise<Doctor | Client | never> {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { iat, exp, ...validateData } = tokenData;
        if (tokenData.role) {
            return this.authHelper.validateUser(validateData, this.doctorModel);
        } else {
            return this.authHelper.validateUser(validateData, this.clientModel);
        }
    }
}
