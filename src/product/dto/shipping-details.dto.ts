import { IsNumber } from "class-validator";
import { IShipping_Details } from "../interfaces/shipping_details.interface";

export class ShippingDetailsDto implements IShipping_Details {
    @IsNumber()
    weight: number;
  
    @IsNumber()
    width: number;
  
    @IsNumber()
    height: number;
  
    @IsNumber()
    depth: number;
  }