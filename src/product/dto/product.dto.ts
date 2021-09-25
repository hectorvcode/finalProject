import { ApiProperty } from "@nestjs/swagger";
import { IManufactureDetails } from "../interfaces/manufacture_detail.interface";
import { IShipping_Details } from "../interfaces/shipping_details.interface";

export class CreateProductDTO {
    @ApiProperty({ type:String, description:'Product name' })
    item:string;

    @ApiProperty({ type:String, description:'Product description' })
    description: string;
    
    @ApiProperty({ type:Number, description:'Product price' })
    price: number;
    
    @ApiProperty({ type:Number, description:'Stock of the product' })
    quantity: number;
    
    @ApiProperty({ type:[String], description:'Categories to clasify products' })
    category:string[];
    
    @ApiProperty({ type:[String], description:'Product\'s pictures' })
    images: string[];

    @ApiProperty({ type: Object, description:'Product model and brand' })
    manufacture_details: IManufactureDetails;
    
    @ApiProperty({ type:[String], description:'Product Colors' })
    color: string[];
    
    @ApiProperty({ type:Object, description:'Product Dimensions' })
    shipping_details: IShipping_Details;
}