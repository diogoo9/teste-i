import { Column, PrimaryColumn, DeleteDateColumn, Entity } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('vehicles')
export class Vehicle {
  @PrimaryColumn()
  id: string;

  @Column()
  company_id: string;

  @Column()
  license: string;

  @Column()
  vin: string;

  @Column()
  lat: string;

  @Column()
  long: string;

  @DeleteDateColumn()
  deleted_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
