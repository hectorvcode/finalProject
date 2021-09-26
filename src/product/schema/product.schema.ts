import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { IManufactureDetails } from "../interfaces/manufacture_detail.interface";
import { IShipping_Details } from "../interfaces/shipping_details.interface";

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

    @Prop(
        raw({
            model: { type: String, required: true },
            brand: { type: String, required: true }
        })
    )
    manufacture_details: IManufactureDetails;

    @Prop(
        raw({
            weight: { type: Number, required: true },
            width: { type: Number, required: true },
            height: { type: Number, required: true },
            depth: { type: Number, required: true }
        })
    )
    shipping_details: IShipping_Details;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
