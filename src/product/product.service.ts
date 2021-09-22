import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDTO } from './dto/product.dto';
import { IProduct } from './interfaces/product.interface';

@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private readonly productModel: Model<IProduct>){}

    async getProducts(): Promise<IProduct[]>{

        return await this.productModel.find();

    }

    async getProduct(productID:string): Promise<IProduct>{
        const product = await this.productModel.findById(productID);
        if(!product) throw new NotFoundException('Product does not exist');
        return product;
    }

    async createProduct(createProductDTO: CreateProductDTO): Promise<IProduct>{
        const product =  new this.productModel(createProductDTO);
        return await product.save();
    }

    async deleteProduct(productID:string):Promise<IProduct>{
        const deletedProduct = await this.productModel.findByIdAndDelete(productID);
        if(!deletedProduct) throw new NotFoundException('Product does not exist');
        return deletedProduct;
    }

    async updateProduct(productID:string, createProductDTO:CreateProductDTO): Promise<IProduct>{
        const updateProduct = await this.productModel.findByIdAndUpdate( 
            productID, createProductDTO, {new:true}
        );
        if(!updateProduct) throw new NotFoundException('Product does not exist');
        return updateProduct;
    }
}
