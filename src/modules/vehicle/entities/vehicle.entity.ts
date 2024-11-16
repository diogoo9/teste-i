import { Company } from 'src/modules/company/entities/company.entity';
import {
  Column,
  PrimaryColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
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

  @OneToOne(() => Company)
  @JoinColumn({ referencedColumnName: 'id', name: 'company_id' })
  company: Company;

  @DeleteDateColumn()
  deleted_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
