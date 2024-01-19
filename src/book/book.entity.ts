// book.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Author } from '../author/author.entity';
import { Review } from '../review/review.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @ManyToOne(() => Author, (author) => author.books, {
    onDelete: 'CASCADE', // Do not cascade deletes from Book to Author
  })
  author!: Author;

  @OneToMany(() => Review, (review) => review.book, {
    cascade: true, // Cascade operations for related reviews
  })
  reviews!: Review[];
}
