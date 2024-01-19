// book.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  create(book: Partial<Book>): Promise<Book> {
    return this.booksRepository.save(book);
  }

  findAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  findOne(id: number): Promise<Book | null> {
    return this.booksRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.booksRepository.delete(id);
  }

  async update(id: number, book: Partial<Book>): Promise<void> {
    await this.booksRepository.update(id, book);
  }
}
