import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class CreditCard {

    @Prop( { type: String, required:true } )
    ccNetwork:string;

    @Prop( { type: Number, required:true } )
    lastFourNumbers:number;

    @Prop( { type: Number, required:true } )
    expiryMonth:number;

    @Prop( { type: Number, required:true } )
    expiryYear:number;

    @Prop( { type: Boolean, required:true } )
    cvvVerified:boolean;
}

export const CreditCardSchema = SchemaFactory.createForClass(CreditCard);