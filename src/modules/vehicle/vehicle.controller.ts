import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { MyAuth } from 'src/decoratos/myAuth';
import { ApiBody } from '@nestjs/swagger';
import { faker } from '@faker-js/faker';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  @MyAuth()
  @ApiBody({
    schema: {
      example: {
        company_id: '12ad4d32-9748-46c3-8e43-269c2b7769c1',
        license: 'PL8Z4U',
        vin: faker.vehicle.vin(),
        lat: 'xxxx',
        long: 'xxx',
      },
    },
  })
  create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehicleService.create(createVehicleDto);
  }

  @Get()
  @MyAuth()
  findAll() {
    return this.vehicleService.findAll();
  }

  @Delete(':id')
  @MyAuth()
  remove(@Param('id') id: string) {
    return this.vehicleService.remove(id);
  }
}
