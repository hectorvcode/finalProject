import { IManufactureDetails } from "./manufacture_detail.interface";
import { IShippingDetails } from "./shipping_details.interface";
import { Document } from 'mongoose';

export interface IProduct extends Document {
    item: string;
    description: string;
    price: number;
    quantity: number;
    createdAt: Date;
    category: string[];
    images: string[];
    manufacture_details: IManufactureDetails;
    color: string[];
    shipping_details: IShippingDetails;
}