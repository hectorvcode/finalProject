import { Injectable, NotFoundException } from '@nestjs/common';
import { IOrder } from './models/order.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {

    constructor(@InjectModel('Order') private readonly orderModel: Model<IOrder>){}

    async getOrders(): Promise<IOrder[]>{
        const orders = await this.orderModel.find({},{'__v':0});
        return orders;
    }

    async getOrder(orderId:string): Promise<IOrder>{
        const order = await this.orderModel.findById(orderId,{'__v':0});
        if(!order) throw new NotFoundException('Order does not exist');
        return order;
    }

    async createOrder(createOrderDto: CreateOrderDto): Promise<IOrder>{
        const order =  new this.orderModel(createOrderDto);
        return await order.save();
    }

    async deleteOrder(orderId:string):Promise<IOrder>{
        const deletedOrder = await this.orderModel.findByIdAndDelete(orderId);
        if(!deletedOrder) throw new NotFoundException('Order does not exist');
        return deletedOrder;
    }

    async updateOrder(orderId:string, createOrderDto:CreateOrderDto): Promise<IOrder>{
        const updatedOrder = await this.orderModel.findByIdAndUpdate( 
            orderId, createOrderDto, {new:true}
        );
        if(!updatedOrder) throw new NotFoundException('Order does not exist');
        return updatedOrder;
    }
}
