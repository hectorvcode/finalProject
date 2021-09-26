import { PartialType } from "@nestjs/swagger";
import { IsMongoIdObject } from "src/common/validators/is-mongo-id-object-validator";
import { CreateProductDTO } from "./create-product.dto";

export class UpdateProductDTO extends PartialType(CreateProductDTO){
    @IsMongoIdObject({ message: 'Invalid product id format' })
    id: string
}