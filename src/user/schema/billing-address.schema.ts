import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class BillingAddress {

    @Prop( {required:true} )
    country:string;

    @Prop( {required:true} )
    province:string;

    @Prop( {required:true} )
    city:string;

    @Prop( {required:true} )
    street1:string;

    @Prop( {required:true} )
    street2:string;
}

export const BillingAddressSchema = SchemaFactory.createForClass(BillingAddress);