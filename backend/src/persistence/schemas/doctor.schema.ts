import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DoctorDocument = HydratedDocument<Doctor>;

@Schema()
export class Doctor {
    @Prop()
    email: string;
    @Prop()
    name: string;
    @Prop()
    passwordHash: string;
    @Prop()
    specialization: string;
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);
