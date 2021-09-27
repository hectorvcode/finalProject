import { Document } from 'mongoose';
import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IItems } from '../interfaces/items.interface';


export type OrderDocument = Order & Document;

@Schema({ timestamps:true })
export class Order {

    @Prop({ type: String, required:true })
    paymentStatus: string;

    @Prop({ type: String, required:true })
    status: string;

    @Prop({
        type:[
            {itemId: { type: String, required:true }},
            {quantity: { type:Number, required:true }},
            {price: { type:Number, required:true }},
            {discounts: { type:Number, required:true }},
            {pretax: { type:Number, required:true }},
            {aftertax: { type:Number, required:true }}
        ]
    })
    orderedItems:IItems[];

    // @Prop(
    //     raw({
    //         itemId: { type: String, required: true },
    //         quantity: { type:Number, required:true },
    //         price: { type:Number, required:true },
    //         discounts: { type:Number, required:true },
    //         pretax: { type:Number, required:true },
    //         aftertax: { type:Number, required:true }
    //     })
    // )
    // items: IItems[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);