import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IBillingAddress } from '../interfaces/billing-address.interface';
import { IIdCard } from '../interfaces/id-card.interface';
import { IShippingAddress } from '../interfaces/shipping-address.interface';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {

    @Prop({ type: String, required: true, unique: true })
    userEmail: string;

    @Prop({ type: String, required: true })
    firstName: string;

    @Prop({ type: String, required: true })
    lastName: string;

    @Prop({ type: Boolean, required: true })
    emailVerified: boolean;

    @Prop(
        raw({
            type: { type: String, required: true },
            idNumber: { type: Number, required: true }
        })
    )
    idCard: IIdCard;

    @Prop({ type: String, required: true })
    hashedPassword: string;

    @Prop(
        raw({
            country: { type: String, required: true },
            province: { type: String, required: true },
            city: { type: String, required: true },
            street1: { type: String, required: true },
            street2: { type: String }
        })
    )
    billingAddress: IBillingAddress;

    @Prop(
        raw({
            country: { type: String, required: true },
            province: { type: String, required: true },
            city: { type: String, required: true },
            street1: { type: String, required: true }
        })
    )
    shippingAddress: IShippingAddress;
}

export const UserSchema = SchemaFactory.createForClass(User);