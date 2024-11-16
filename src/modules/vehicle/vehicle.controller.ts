import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { MyAuth } from 'src/decoratos/myAuth';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { faker } from '@faker-js/faker';
import { UserAuthGuard } from 'src/guards/auth.guard';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  @UseGuards(UserAuthGuard)
  @ApiBearerAuth('access-token')
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
  @UseGuards(UserAuthGuard)
  @ApiBearerAuth('access-token')
  findAll(@Req() request) {
    const { user_id } = request.user;
    return this.vehicleService.findAll(user_id);
  }

  @Delete(':id')
  @UseGuards(UserAuthGuard)
  @ApiBearerAuth('access-token')
  remove(@Param('id') id: string, @Req() request) {
    const { user_id } = request.user;
    return this.vehicleService.remove(id, user_id);
  }
}
