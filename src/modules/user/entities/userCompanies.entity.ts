import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import User from './user.entity';
import { Company } from 'src/modules/company/entities/company.entity';

@Entity('user_companies')
export default class UserCompanies {
  @PrimaryColumn({ nullable: false })
  user_id: string;

  @PrimaryColumn({ nullable: false })
  company_id: string;

  @ManyToOne(() => User, (user) => user.company, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user?: User[];

  @ManyToOne(() => Company, (company) => company.user, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'course_id', referencedColumnName: 'id' }])
  company?: Company[];
}
