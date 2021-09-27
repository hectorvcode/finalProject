import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString } from "class-validator";
import { IShippingAddress } from "../interfaces/shipping-address.interface";

export class ShippingAddressDto implements IShippingAddress{

    @Type(()=>String)
    @ApiProperty({ type:String, description:'This is the Country Shipping Address'})
    @IsString()
    country: string;

    @Type(()=>String)
    @ApiProperty({ type:String, description:'This is the Country Shipping Address'})
    @IsString()
    province: string;

    @Type(()=>String)
    @ApiProperty({ type:String, description:'This is the Country Shipping Address'})
    @IsString()
    city: string;

    @Type(()=>String)
    @ApiProperty({ type:String, description:'This is the Country Shipping Address'})
    @IsString()
    street1: string;
}