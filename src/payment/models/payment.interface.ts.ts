import { ICreditCard } from "./credit-card.interface";


export interface IPayment extends Document {

    paymentType:string;
    paymentStatus:string;
    creditCard:ICreditCard;
}