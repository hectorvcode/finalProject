import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class ManufactureDetails {

    @Prop( {required:true} )
    model:string;

    @Prop( {required:true} )
    brand:string;
}

export const ManufactureDetailsSchema = SchemaFactory.createForClass(ManufactureDetails);