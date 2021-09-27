import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString } from "class-validator";
import { IBillingAddress } from "../interfaces/billing-address.interface";

export class BillingAddressDto implements IBillingAddress {
    
    @Type( ()=>String ) 
    @ApiProperty({ type:String, description:'This is the country billing address' })
    @IsString()
    country:string;

    @Type( ()=>String ) 
    @ApiProperty({ type:String, description:'This is province billing address'})
    @IsString()
    province:string;

    @Type( ()=>String ) 
    @ApiProperty({ type:String, description:'This is the city billing address' })
    @IsString()
    city:string;

    @Type( ()=>String ) 
    @ApiProperty({ type:String, description:'This is the main billing address'})
    @IsString()
    street1:string;

    @Type( ()=>String ) 
    @ApiProperty({ type:String, description:'This is the secondary billing address'})
    @IsString()
    street2?:string;
}