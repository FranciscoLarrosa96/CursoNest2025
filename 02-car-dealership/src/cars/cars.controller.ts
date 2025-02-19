import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

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
    getCarById(@Param('id', ParseIntPipe) id: number) {
        return this.carsService.getCarById(id);
    }

    @Post()
    createCar(@Body() body: any) {
        return body;
    }

    @Patch(':id')
    updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
        return {
            id,
            ...body
        }
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseIntPipe) id: number) {
        return {
            message: `Car with ID ${id} has been deleted`
        }
    }
}
