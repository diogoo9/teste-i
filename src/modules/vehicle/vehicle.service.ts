import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { VehicleRepository } from './repository/vehicle.repository';
import { AppError } from 'src/errors/AppError';

@Injectable()
export class VehicleService {
  constructor(private vehicleRepository: VehicleRepository) {}

  create(createVehicleDto: CreateVehicleDto) {
    return this.vehicleRepository.createVehicle(createVehicleDto);
  }

  findAll() {
    return this.vehicleRepository.getAll();
  }

  async remove(id: string) {
    const company = await this.vehicleRepository.findOneNoDeleted({ id });

    if (!company) {
      throw new AppError('Veiculo não encontrado', 404);
    }
    const { affected } = await this.vehicleRepository.deleteVehicle(id);

    if (affected == 1) {
      return {
        statusCode: 200,
        message: 'Veiculo Excluido com sucesso',
      };
    }
  }
}
