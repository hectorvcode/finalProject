import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class OrderedItems {

    @Prop( {required:true} )
    itemId:string;

    @Prop( {required:true} )
    quantity:number;

    @Prop( {required:true} )
    price:number;

    @Prop( {required:true} )
    discounts:number;

    @Prop( {required:true} )
    preTax:number;

    @Prop( {required:true} )
    afterTax:number;
}

export const OrderedItemsSchema = SchemaFactory.createForClass(OrderedItems);