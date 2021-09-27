import { Document } from 'mongoose';
import { IBillingAddress } from './billing-address.interface';
import { IIdCard } from './id-card.interface';
import { IShippingAddress } from './shipping-address.interface';

export interface IUser extends Document {
    userEmail:string;
    firstName:string;
    lastName:string;
    emailVerified:boolean;
    idCard:IIdCard;
    hashedPasswod: string;
    billingAddress: IBillingAddress;
    shippingAddress: IShippingAddress;
}