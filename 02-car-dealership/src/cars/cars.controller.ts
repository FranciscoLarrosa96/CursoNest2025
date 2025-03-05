import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ) { }

    @Get()
    getAllCars() {
        return this.carsService.getAllCars();
    }


    @Get(':id')
    getCarById(@Param('id' ,ParseUUIDPipe) id: string) {
        return this.carsService.getCarById(id);
    }

    @Post()
    createCar(@Body() createCarDto: CreateCarDto) {
        return createCarDto;
    }

    @Patch(':id')
    updateCar(@Param('id') id: string, @Body() body: any) {
        return {
            id,
            ...body
        }
    }

    @Delete(':id')
    deleteCar(@Param('id') id: string) {
        return {
            message: `Car with ID ${id} has been deleted`
        }
    }
}
