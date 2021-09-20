//55:52

import { IManufactureDetails } from "../interfaces/manufacture_detail.interface";
import { IShipping_Details } from "../interfaces/shipping_details.interface";

export class CreateProductDTO {
    item:string;
    description: string;
    price: number;
    quantity: number;
    createdAt: Date;
    category:string[];
    images: string[];
    manufacture_details: IManufactureDetails;
    color: string[];
    shipping_details: IShipping_Details;
}