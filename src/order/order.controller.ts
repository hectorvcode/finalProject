import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';

@ApiTags('orders')
@Controller('order')
export class OrderController {

    constructor(private readonly orderService: OrderService){}

    @Post('create')
    @ApiCreatedResponse({ description: 'The resource has been succesfully created' })
    @ApiForbiddenResponse({ description: 'Forbbiden' })
    async createOrder(@Body() createOrderDto: CreateOrderDto){
        return await this.orderService.createOrder(createOrderDto);
    }

    @Get()
    @ApiOkResponse({ description: 'The resource list has been succesfully returned' })
    @ApiForbiddenResponse({ description: 'Forbbiden' })
    async geOrders() {
        return await this.orderService.getOrders();
    }

    @Get(':orderId')
    @ApiOkResponse({ description: 'The resource has been succesfully returned' })
    @ApiForbiddenResponse({ description: 'Forbbiden' })
    async getOrder(@Param('orderId') orderId){
        return await this.orderService.getOrder(orderId);
    }

    @Delete('delete')
    @ApiOkResponse({ description: 'The resource has been succesfully removed' })
    @ApiForbiddenResponse({ description: 'Forbbiden' })
    async deleteOrder(@Query('orderId') orderId){
        return await this.orderService.deleteOrder(orderId);
    }

    @Put('update')
    @ApiOkResponse({ description: 'The resource has been succesfully updated' })
    @ApiForbiddenResponse({ description: 'Forbbiden' })
    async updateOrder(@Body() createOrderDto:CreateOrderDto, @Query('orderId') orderId){
            return await this.orderService.updateOrder(orderId, createOrderDto);
        }
}
