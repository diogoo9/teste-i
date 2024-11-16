import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Vehicle } from '../entities/vehicle.entity';
import { CreateVehicleDto } from '../dto/create-vehicle.dto';

@Injectable()
export class VehicleRepository extends Repository<Vehicle> {
  constructor(dataSource: DataSource) {
    super(Vehicle, dataSource.createEntityManager());
  }

  async createVehicle(data: CreateVehicleDto) {
    const vehicle = new Vehicle();
    Object.assign(vehicle, data);
    const newVehicle = await this.save(vehicle);
    delete newVehicle.deleted_at;
    return newVehicle;
  }
  getAll(): Promise<Vehicle[]> {
    return this.find({
      select: ['id', 'company_id', 'license', 'vin', 'lat', 'long'],
    });
  }

  findOneNoDeleted(data: { id?: string; login?: string }) {
    return this.findOne({
      where: { ...data },
    });
  }

  deleteVehicle(id: string) {
    return this.softDelete({ id });
  }
}
