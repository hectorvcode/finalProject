import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsString } from "class-validator";
import { IIdCard } from "../interfaces/id-card.interface";

export class IdCardDto implements IIdCard {

    @Type(()=>String)
    @ApiProperty({ type:String, description: 'This is the id card type'})
    @IsString()
    type:string;

    @Type(()=>Number)
    @ApiProperty({ type:String, description: 'This is the id card number'})
    @IsInt()
    idNumber:number;
}