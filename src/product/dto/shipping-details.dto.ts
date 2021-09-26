import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber } from "class-validator";
import { IShipping_Details } from "../interfaces/shipping_details.interface";

export class ShippingDetailsDto implements IShipping_Details {
    
  @Type(()=>Number)
  @ApiProperty({ type:Number, description:'This is the product\'s weight'})
  @IsNumber()
  weight: number;
  
  @Type(()=>Number)
  @ApiProperty({ type:Number, description:'This is the product\'s width'})
  @IsNumber()
  width: number;
  
  @Type(()=>Number)
  @ApiProperty({ type:Number, description:'This is the product\'s height'})
  @IsNumber()
  height: number;
  
  @Type(()=>Number)
  @ApiProperty({ type:Number, description:'This is the product\'s depth'})
  @IsNumber()
  depth: number;
  }