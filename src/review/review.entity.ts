// review.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Book } from '../book/book.entity';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  content!: string;

  @ManyToOne(() => Book, (book) => book.reviews, {
    onDelete: 'CASCADE', // Cascade deletes from Review to Book
  })
  book!: Book;
}
