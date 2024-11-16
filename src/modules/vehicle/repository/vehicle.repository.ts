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
  getAll(userId: string): Promise<Vehicle[]> {
    return this.find({
      select: ['id', 'company_id', 'license', 'vin', 'lat', 'long'],
      where: { company: { user: { id: userId } } },
    });
  }

  findOneNoDeleted(id: string, userId: string) {
    return this.findOne({
      where: { id, company: { user: { id: userId } } },
    });
  }

  deleteVehicle(id: string) {
    return this.softDelete({ id });
  }

  deleteVehicleByCompanyId(id: string) {
    return this.softDelete({ company_id: id });
  }
}
