import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            id: 1,
            brand: 'Audi',
            model: 'A4',
        },
        {
            id: 2,
            brand: 'Toyota',
            model: 'Corolla',
        },
        {
            id: 3,
            brand: 'Honda',
            model: 'Civic',
        },
    ];

    getAllCars() {
        return this.cars;
    }

    getCarById(id: number) {
        const car = this.cars.find(car => car.id === id);
        return car;
    }


}
