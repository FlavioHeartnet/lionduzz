import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Product } from './product.entity';

@Entity()
export class Sale {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Product)
  product: Product;

  @ManyToOne(() => User)
  customer: User;

  @Column()
  price: number;

  @CreateDateColumn()
  createdAt: Date;
}
