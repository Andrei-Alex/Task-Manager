import {Entity, PrimaryGeneratedColumn, Column, Index} from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Index('name-idx')
  @Column()
  full_name: string;
  password: string;
  @Column({
    unique: true,
  })
  email:string;

}
