import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreatePaymentDTO } from './dto/create-payment.dto';
import { PaymentService } from './payment.service';

@ApiTags('payments')
@Controller('payment')
export class PaymentController {

    constructor(private readonly paymentService: PaymentService){}

    @Post('create')
    @ApiCreatedResponse({ description: 'The resource has been succesfully created' })
    @ApiForbiddenResponse({ description: 'Forbbiden' })
    async createPayment(@Body() createPaymentDTO: CreatePaymentDTO){
        return await this.paymentService.createPayment(createPaymentDTO);
    }

    @Get()
    @ApiOkResponse({ description: 'The resource list has been succesfully returned' })
    @ApiForbiddenResponse({ description: 'Forbbiden' })
    async getPayments() {
        return await this.paymentService.getPayments();
    }

    @Get(':paymentID')
    @ApiOkResponse({ description: 'The resource has been succesfully returned' })
    @ApiForbiddenResponse({ description: 'Forbbiden' })
    async getPayment(@Param('paymentID') paymentID){
        return await this.paymentService.getPayment(paymentID);
    }

    @Delete('delete')
    @ApiOkResponse({ description: 'The resource has been succesfully removed' })
    @ApiForbiddenResponse({ description: 'Forbbiden' })
    async deletepayment(@Query('paymentID') paymentID){
        return await this.paymentService.deletePayment(paymentID);
    }

    @Put('update')
    @ApiOkResponse({ description: 'The resource has been succesfully updated' })
    @ApiForbiddenResponse({ description: 'Forbbiden' })
    async updatePayment(@Body() createPaymentDTO:CreatePaymentDTO, @Query('paymentID') paymentID){
            return await this.paymentService.updatePayment(paymentID, createPaymentDTO);
        }
}
