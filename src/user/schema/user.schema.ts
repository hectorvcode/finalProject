import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IBillingAddress } from '../interfaces/billing-address.interface';
import { IIdCard } from '../interfaces/id-card.interface';
import { IShippingAddress } from '../interfaces/shipping-address.interface';
import { BillingAddress, BillingAddressSchema } from './billing-address.schema';
import { IdCard, IdCardSchema } from './idcard.schema';
import { ShippingAddress, ShippingAddressSchema } from './shipping-address.schema';

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

    @Prop({ type: IdCardSchema })
    idCard: IdCard;

    @Prop({ type: String, required: true })
    password: string;

    @Prop({ type:BillingAddressSchema })
    billingAddress: BillingAddress;

    @Prop({ type:ShippingAddressSchema})
    shippingAddress: ShippingAddress;
}

export const UserSchema = SchemaFactory.createForClass(User);