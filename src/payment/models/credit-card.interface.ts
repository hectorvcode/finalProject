export interface ICreditCard {

    ccNetwork:string;
    lastFourNumbers:number;
    expiryMonth:number;
    expiryYear:number;
    cvvVerified:boolean;
}