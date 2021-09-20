import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService){}

    @Post('create')
    async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO){
        //console.log(createProductDTO);
        const product = await this.productService.createProduct(createProductDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Product Succesfully Created',
            product //product: product
        });
    }

    @Get()
    async getProducts(@Res() res) {
        const products = await this.productService.getProducts();
        res.status(HttpStatus.OK).json({
            products //products: products
        })
    }

    @Get(':productID')
    async getProduct(@Res() res, @Param('productID') productID){
        const product = await this.productService.getProduct(productID);
        if(!product) throw new NotFoundException('Product does not exist');
        return res.status(HttpStatus.OK).json(product);
    }

    @Delete('delete')
    async deleteProduct(@Res() res, @Query('productID') productID){
        const productDeleted = await this.productService.deleteProduct(productID);
        if(!productDeleted) throw new NotFoundException('Product does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Product Succesfully Deleted',
            productDeleted
        });
    }

    @Put('update')
    async updateProduct(
        @Res() res, 
        @Body() CreateProductDTO:CreateProductDTO,
        @Query('productID') productID){
            const updatedProduct = await this.productService
            .updateProduct(productID, CreateProductDTO);
            if(!updatedProduct) throw new NotFoundException('Product does not exist');
            return res.status(HttpStatus.OK).json({
                message: 'Product Updated Successfully',
                updatedProduct
            })
        }
}
