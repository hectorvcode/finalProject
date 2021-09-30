import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class ShippingAddress {

    @Prop( {required:true} )
    country:string;

    @Prop( {required:true} )
    province:string;

    @Prop( {required:true} )
    city:string;

    @Prop( {required:true} )
    street1:string;
}

export const ShippingAddressSchema = SchemaFactory.createForClass(ShippingAddress);