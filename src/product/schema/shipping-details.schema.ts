import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class ShippingDetails {

    @Prop( {required:true} )
    weight:number;

    @Prop( {required:true} )
    width:number;

    @Prop( {required:true} )
    height:number;

    @Prop( {required:true} )
    depth:number;
}
export const ShippingDetailsSchema = SchemaFactory.createForClass(ShippingDetails);