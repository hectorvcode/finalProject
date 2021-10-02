import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsNumber, IsString } from "class-validator";
import { ICreditCard } from "../models/credit-card.interface";

export class CreditCardDto implements ICreditCard {

    @Type(()=>String)
    @ApiProperty({ type:String, description:'This is credit card network ie. visa'})
    @IsString()
    ccNetwork: string;

    @Type(()=>Number)
    @ApiProperty({ type:Number, description:'This are the last four numbers of the credit card'})
    @IsNumber()
    lastFourNumbers: number;

    @Type(()=>Number)
    @ApiProperty({ type:Number, description:'This is the credit card expiry month'})
    @IsNumber()
    expiryMonth: number;

    @Type(()=>Number)
    @ApiProperty({ type:Number, description:'This is the credit card expiry year'})
    @IsNumber()
    expiryYear: number;

    @Type(()=>Boolean)
    @ApiProperty({ type:Boolean, description:'This is the credit card expiry year'})
    @IsBoolean()
    cvvVerified: boolean;
}