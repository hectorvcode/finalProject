import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductDTO } from './dto/create-product.dto';
import { ProductService } from './product.service';

@ApiTags('products')
@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService){}

    @Post('create')
    @ApiCreatedResponse({ description: 'The resource has been succesfully created' })
    @ApiForbiddenResponse({ description: 'Forbbiden' })
    async createPost(@Body() createProductDTO: CreateProductDTO){
        //console.log(createProductDTO);
        return await this.productService.createProduct(createProductDTO);
    }

    @Get()
    @ApiOkResponse({ description: 'The resource list has been succesfully returned' })
    @ApiForbiddenResponse({ description: 'Forbbiden' })
    async getProducts() {
        return await this.productService.getProducts();
    }

    @Get(':productID')
    @ApiOkResponse({ description: 'The resource has been succesfully returned' })
    @ApiForbiddenResponse({ description: 'Forbbiden' })
    async getProduct(@Param('productID') productID){
        return await this.productService.getProduct(productID);
        //if(!product) throw new NotFoundException('Product does not exist');
    }

    @Delete('delete')
    @ApiOkResponse({ description: 'The resource has been succesfully removed' })
    @ApiForbiddenResponse({ description: 'Forbbiden' })
    async deleteProduct(@Query('productID') productID){
        return await this.productService.deleteProduct(productID);
    }

    @Put('update')
    @ApiOkResponse({ description: 'The resource has been succesfully updated' })
    @ApiForbiddenResponse({ description: 'Forbbiden' })
    async updateProduct(@Body() createProductDTO:CreateProductDTO, @Query('productID') productID){
            return await this.productService.updateProduct(productID, createProductDTO);
        }
}
