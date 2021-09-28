import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested } from "class-validator";
import { OrderedItems } from "../schema/ordered-items.schema";


export class CreateOrderDto {

    @ApiProperty({ description:'User email' })
    @IsString({message:"This must be a string 1", always: true})
    userEmail:string;

    @ApiProperty({ description:'Order payment status' })
    @IsString({message:"This must be a string 2", always: true})
    paymentStatus:string;

    @ApiProperty({ description:'Order status' })
    @IsString({message:"This must be a string 3", always: true})
    status:string;

    @ApiProperty({ description:'Order items list' })
    @ValidateNested({ each:true })
    orderdedItems: OrderedItems[];
}