import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePaymentDTO } from './dto/create-payment.dto';
import { IPayment } from './models/payment.interface.ts';

@Injectable()
export class PaymentService {

    constructor(@InjectModel('Payment') private readonly paymentModel: Model<IPayment>){}

    async getPayments(): Promise<IPayment[]>{
        const payments =  await this.paymentModel.find({},{'_v':0});
        return payments;
    }

    async getPayment(paymentID:string): Promise<IPayment>{
        const payment = await this.paymentModel.findById(paymentID,{'__v':0});
        if(!payment) throw new NotFoundException('Payment does not exist');
        return payment;
    }

    async createPayment(createPaymentDTO: CreatePaymentDTO): Promise<IPayment>{
        const payment =  new this.paymentModel(createPaymentDTO);
        return await payment.save();
    }

    async deletePayment(paymentID:string):Promise<IPayment>{
        const deletedPayment = await this.paymentModel.findByIdAndDelete(paymentID);
        if(!deletedPayment) throw new NotFoundException('Pyment does not exist');
        return deletedPayment;
    }

    async updatePayment(paymentID:string, createPaymentDTO:CreatePaymentDTO): Promise<IPayment>{
        const updatePayment = await this.paymentModel.findByIdAndUpdate( 
            paymentID, createPaymentDTO, {new:true}
        );
        if(!updatePayment) throw new NotFoundException('Payment does not exist');
        return updatePayment;
    }
}
