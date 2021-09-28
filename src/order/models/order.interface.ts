import { Document } from 'mongoose';
import { OrderedItems } from '../schema/ordered-items.schema';

export interface IOrder extends Document {
    userEmail:string;
    paymentStatus:string;
    status: string;
    orderedItems: OrderedItems;
}