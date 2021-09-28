import { Document } from 'mongoose';
import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IItems } from '../models/items.interface';
import { OrderedItems, OrderedItemsSchema } from './ordered-items.schema';


export type OrderDocument = Order & Document;

@Schema({ timestamps:true })
export class Order {

    @Prop({ type:String, required:true })
    userEmail:string;

    @Prop({ type: String, required:true })
    paymentStatus: string;

    @Prop({ type: String, required:true })
    status: string;

    @Prop({ type:[OrderedItemsSchema] })
    orderedItems: OrderedItems[];

}
export const OrderSchema = SchemaFactory.createForClass(Order);
