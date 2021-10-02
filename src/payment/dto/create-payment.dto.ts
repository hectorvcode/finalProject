import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested } from "class-validator";
import { CreditCardDto } from "./credit-card.dto";

export class CreatePaymentDTO {

    @ApiProperty({ description:'Payment type ie. credit' })
    @IsString({message:"This must be a string", always: true})
    paymentType:string;

    @ApiProperty({ description:'Payment status ie. verified or not' })
    @IsString({message:"This must be a string", always: true})
    paymentStatus:string;

    @ApiProperty({ description:'Product model and brand' })
    @ValidateNested({ each:true })
    creditCard: CreditCardDto;
}