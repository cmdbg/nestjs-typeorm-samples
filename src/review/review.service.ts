// src/review.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './review.entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private reviewsRepository: Repository<Review>,
  ) {}

  create(review: Partial<Review>): Promise<Review> {
    return this.reviewsRepository.save(review);
  }

  findAll(): Promise<Review[]> {
    return this.reviewsRepository.find();
  }

  findOne(id: number): Promise<Review | null> {
    return this.reviewsRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.reviewsRepository.delete(id);
  }

  async update(id: number, review: Partial<Review>): Promise<void> {
    await this.reviewsRepository.update(id, review);
  }
}
