import {
  Entity,
  Column,
  BeforeInsert,
  PrimaryColumn,
  DeleteDateColumn,
} from 'typeorm';
import { hash } from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

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
