import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { ManufactureDetails, ManufactureDetailsSchema } from "./manufacture-details.schema";
import { ShippingDetails, ShippingDetailsSchema } from "./shipping-details.schema";

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {

    @Prop({ type: String, required: true, unique: true })
    item: string;

    @Prop({ type: String, required: true })
    description: string;

    @Prop({ type: Number, required: true })
    price: Number;

    @Prop({ type: Number, required: true })
    quantity: Number;

    @Prop({ 
        type:()=>[String],
        required:true,
        validate: {
            validator: (value) => {
                return value.every((item)=> typeof item === 'string');
            },
            message: (props) => `${props.value} must be an string`
        }
    })
    category: string[];

    @Prop({ 
        type:()=>[String],
        required:true,
        validate: {
            validator: (value) => {
                return value.every((item)=> typeof item === 'string');
            },
            message: (props) => `${props.value} must be an string`
        }
    })
    images: string[];

    @Prop({ 
        type:()=>[String],
        required:true,
        validate: {
            validator: (value) => {
                return value.every((item)=> typeof item === 'string');
            },
            message: (props) => `${props.value} must be an string`
        }
    })
    color: string[];

    @Prop({ type:ManufactureDetailsSchema })
    manufacture_details: ManufactureDetails;

    @Prop({ type:ShippingDetailsSchema })
    shipping_details: ShippingDetails;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
