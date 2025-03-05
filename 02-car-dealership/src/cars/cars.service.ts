import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto copy';
@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Audi',
            model: 'A4',
        },
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla',
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic',
        },
    ];

    getAllCars() {
        return this.cars;
    }

    getCarById(id: string) {
        const car = this.cars.find(car => car.id === id);
        if (!car) {
            throw new NotFoundException('Car not found');
        }
        return car;
    }


    createCar(createCarDto: CreateCarDto) {
        const newCar = {
            id: uuid(),
            ...createCarDto
        }
        this.cars.push(newCar);
        return newCar;
    }

    updateCar(id: string, UpdateCarDto: UpdateCarDto) {
        if (!this.getCarById(id)) {
            throw new NotFoundException('Car not found');
        }
        const index = this.cars.findIndex(car => car.id === id);
        this.cars[index] = {
            ...this.cars[index],
            ...UpdateCarDto
        };
        return this.cars[index];
    }

    deleteCar(id: string) {
        if (!this.getCarById(id)) {
            throw new NotFoundException('Car not found');
        }
        this.cars = this.cars.filter(car => car.id !== id);
        return {
            message: `Car with ID ${id} has been deleted`
        }
    }

}
