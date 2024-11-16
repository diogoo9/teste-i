import {
  Entity,
  Column,
  BeforeInsert,
  PrimaryColumn,
  DeleteDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { hash } from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { Company } from 'src/modules/company/entities/company.entity';

@Entity('users')
export default class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  login: string;

  @Column()
  password: string;

  @Column({ default: false })
  is_admin: boolean;

  @DeleteDateColumn()
  deleted_at: Date;

  @ManyToMany(() => Company, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
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
  company: Company[];

  @BeforeInsert()
  async setPassWord(password: string) {
    this.password = await hash(
      password || this.password,
      Number(process.env.BCRYPT_SALT),
    );
  }

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
