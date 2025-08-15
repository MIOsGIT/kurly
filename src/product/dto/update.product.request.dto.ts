import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create.product.request.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {}
