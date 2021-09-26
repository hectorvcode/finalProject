import { ApiProperty } from "@nestjs/swagger";
import { ArrayMinSize, IsArray, IsInt, IsString, ValidateNested } from "class-validator";
import { Type, Type as ValidateType } from 'class-transformer';
import { ManufactureDetailsDTO } from "./manufacture-details.dto";
import { ShippingDetailsDto } from "./shipping-details.dto";

export class CreateProductDTO {
    
    @ApiProperty({ description:'Product name' })
    @IsString({message:"This must be a string", always: true})
    item:string;

    @ApiProperty({ description:'Product description' })
    @IsString({message:"This must be a string", always: true})
    description: string;
    
    @ApiProperty({ description:'Product price' })
    @IsInt({message:"This must be an integer", always: true})
    price: number;
    
    @ApiProperty({ description:'Stock of the product' })
    @IsInt({message:"This must be an integer", always: true})
    quantity: number;
    
    @ApiProperty({ description:'Categories to clasify products'})
    @IsArray()
    @ArrayMinSize(1)
    @IsString({each: true, message: "This must be a string"})
    category:string[];
    
    @ApiProperty({ description:'Product\'s pictures' })
    @IsArray()
    @ArrayMinSize(1)
    @IsString({each: true, message: "This must be a string"})
    images: string[];
    
    @ApiProperty({ description:'Product Colors' })
    @IsArray()
    @ArrayMinSize(1)
    @IsString({each: true, message: "This must be a string"})
    color: string[];

    @ApiProperty({ description:'Product model and brand' })
    @ValidateNested({ each:true })
    manufacture_details: ManufactureDetailsDTO;
    
    @ApiProperty({ description:'Product Dimensions' })
    @ValidateNested({ each:true })
    shipping_details: ShippingDetailsDto;
}
