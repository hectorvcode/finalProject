import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { CreditCard } from "./credit-card.schema";


export type PaymentDocument = Payment & Document;

@Schema({ timestamps:true })
export class Payment {

    @Prop({ type: String, required: true })
    paymentType: string;

    @Prop({ type: String, required: true })
    paymentStatus: string;

    @Prop({ type: CreditCard, required: true })
    creditCard: CreditCard;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);