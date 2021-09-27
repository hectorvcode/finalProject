import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString, ValidateNested } from "class-validator";
import { IBillingAddress } from "../interfaces/billing-address.interface";
import { IShippingAddress } from "../interfaces/shipping-address.interface";
import { IdCardDto } from "./id-card.dto";


export class CreateUserDto {

    @ApiProperty({ description: 'User Email'})
    @IsString({ message: 'This must be a string 1', always:true })
    userEmail: string;

    @ApiProperty({ description: 'User First Name'})
    @IsString({ message: 'This must be a string 2', always:true })
    firstName: string;

    @ApiProperty({ description: 'User Last Name'})
    @IsString({ message: 'This must be a string 3', always:true })
    lastName: string;

    @ApiProperty({ description: 'Email verified'})
    @IsBoolean({ message: 'This must be boolean', always:true })
    emailVerified: boolean;

    @ApiProperty({ description: 'User idCard'})
    @ValidateNested({ each:true })
    idCard: IdCardDto;

    @ApiProperty({ description: 'User Hashed Password'})
    @IsString({ message: 'This must be a string 4', always:true })
    hashedPassword: string;

    @ApiProperty({ description: 'Billing Address'})
    @ValidateNested({ each:true })
    billingAddress: IBillingAddress;

    @ApiProperty({ description: 'Billing Address'})
    @ValidateNested({ each:true })
    shippingAddress: IShippingAddress;
}