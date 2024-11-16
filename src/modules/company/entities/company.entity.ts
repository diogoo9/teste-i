import User from 'src/modules/user/entities/user.entity';
import { Vehicle } from 'src/modules/vehicle/entities/vehicle.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('companies')
export class Company {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @DeleteDateColumn()
  deleted_at: Date;

  @ManyToMany(() => User, { cascade: true })
  @JoinTable({
    name: 'user_companies',
    joinColumn: {
      name: 'company_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
  })
  user: User[];

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
