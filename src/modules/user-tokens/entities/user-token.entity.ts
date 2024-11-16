import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('user_tokens')
export class UserToken {
  @PrimaryColumn()
  token: string;

  @Column()
  user_id: string;

  @Column()
  expire_date: Date;

  @Column({ nullable: true })
  canceled_at: Date;

  @Column()
  created_at: Date;
}
