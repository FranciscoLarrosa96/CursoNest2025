import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';
import { IsString, Min, MinLength } from 'class-validator';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {
    @IsString()
    @MinLength(3)
    name: string;
}
