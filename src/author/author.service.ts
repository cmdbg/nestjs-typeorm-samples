// src/author.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './author.entity';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private authorsRepository: Repository<Author>,
  ) {}

  create(author: Partial<Author>): Promise<Author> {
    return this.authorsRepository.save(author);
  }

  findAll(): Promise<Author[]> {
    return this.authorsRepository.find();
  }

  findOne(id: number): Promise<Author | null> {
    return this.authorsRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.authorsRepository.delete(id);
  }

  async update(id: number, author: Partial<Author>): Promise<void> {
    await this.authorsRepository.update(id, author);
  }
}
