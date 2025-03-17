import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';
@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Audi',
      createdAt: Date.now()
    },
    {
      id: uuid(),
      name: 'Toyota',
      createdAt: Date.now()
    },
    {
      id: uuid(),
      name: 'Honda',
      createdAt: Date.now()
    },
  ];

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name,
      createdAt: Date.now()
    }
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
      const brand = this.brands.find(brand => brand.id === id);
      if (!brand) {
          throw new NotFoundException('Brand not found');
      }

      return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDb = this.findOne(id);
    this.brands = this.brands.map(brand => {
      if (brand.id === id) {
        brandDb.updatedAt = Date.now();
        brandDb = { ...brand, ...updateBrandDto };
        return brandDb;
      }
      return brand;
    });
    return brandDb;
  }

  remove(id: string) {
    this.brands = this.brands.filter(brand => brand.id !== id);
    return { message: 'Brand removed successfully' };
  }
}
