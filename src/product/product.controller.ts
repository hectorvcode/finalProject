import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService){}

    @Post('create')
    async createPost(@Body() createProductDTO: CreateProductDTO){
        //console.log(createProductDTO);
        return await this.productService.createProduct(createProductDTO);
    }

    @Get()
    async getProducts() {
        return await this.productService.getProducts();
    }

    @Get(':productID')
    async getProduct(@Param('productID') productID){
        return await this.productService.getProduct(productID);
        //if(!product) throw new NotFoundException('Product does not exist');
    }

    @Delete('delete')
    async deleteProduct(@Query('productID') productID){
        return await this.productService.deleteProduct(productID);
    }

    @Put('update')
    async updateProduct(@Body() createProductDTO:CreateProductDTO, @Query('productID') productID){
            return await this.productService.updateProduct(productID, createProductDTO);
        }
}
