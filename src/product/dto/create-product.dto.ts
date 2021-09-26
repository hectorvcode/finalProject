import { ApiProperty } from "@nestjs/swagger";
import { ArrayMinSize, IsArray, IsInt, IsString, ValidateNested } from "class-validator";
import { IManufactureDetails } from "../interfaces/manufacture_detail.interface";
import { IShipping_Details } from "../interfaces/shipping_details.interface";
import { Type, Type as ValidateType } from 'class-transformer';
import { ManufactureDetailsDTO } from "./manufacture-details.dto";
import { ShippingDetailsDto } from "./shipping-details.dto";

export class CreateProductDTO {
    
    @ApiProperty({ type:String, description:'Product name' })
    @IsString({message:"This must be a string", always: true})
    item:string;

    @ApiProperty({ type:String, description:'Product description' })
    @IsString({message:"This must be a string", always: true})
    description: string;
    
    @ApiProperty({ type:Number, description:'Product price' })
    @IsInt({message:"This must be an integer", always: true})
    price: number;
    
    @ApiProperty({ type:Number, description:'Stock of the product' })
    @IsInt({message:"This must be an integer", always: true})
    quantity: number;
    
    @ApiProperty({ type:[String], description:'Categories to clasify products'})
    @IsArray()
    @ArrayMinSize(1)
    @IsString({each: true, message: "This must be a string"})
    category:string[];
    
    @ApiProperty({ type:[String], description:'Product\'s pictures' })
    @IsArray()
    @ArrayMinSize(1)
    @IsString({each: true, message: "This must be a string"})
    images: string[];
    
    @ApiProperty({ type:[String], description:'Product Colors' })
    @IsArray()
    @ArrayMinSize(1)
    @IsString({each: true, message: "This must be a string"})
    color: string[];

    @ApiProperty({ type: Object, description:'Product model and brand' })
    @ValidateNested({ each:true })
    @Type( () => ManufactureDetailsDTO )
    manufacture_details: ManufactureDetailsDTO;
    
    @ApiProperty({ type:Object, description:'Product Dimensions' })
    @ValidateNested({ each:true })
    @Type( () => ShippingDetailsDto )
    shipping_details: ShippingDetailsDto;
}