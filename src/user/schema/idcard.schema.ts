import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class IdCard {

    @Prop( {required:true} )
    type:string;

    @Prop( {required:true} )
    idNumber:number;
}

export const IdCardSchema = SchemaFactory.createForClass(IdCard);