import { IsString } from "class-validator";
import { IManufactureDetails } from "../interfaces/manufacture_detail.interface";


export class ManufactureDetailsDTO implements IManufactureDetails {
    @IsString()
    model:string;

    @IsString()
    brand:string;
}