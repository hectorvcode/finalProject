import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString } from "class-validator";
import { IManufactureDetails } from "../interfaces/manufacture_detail.interface";


export class ManufactureDetailsDto implements IManufactureDetails {
    
    @Type( ()=>String ) 
    @ApiProperty({ type:String, description:'This is the product\'s model' })
    @IsString()
    model:string;

    @Type( ()=>String ) 
    @ApiProperty({ type:String, description:'This is the product\'s brand'})
    @IsString()
    brand:string;
}