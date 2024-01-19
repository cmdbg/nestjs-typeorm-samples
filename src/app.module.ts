// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorService } from './author/author.service';
import { AuthorController } from './author/author.controller';
import { Author } from './author/author.entity';
import { BookController } from './book/book.controller';
import { BookService } from './book/book.service';
import { Book } from './book/book.entity';
import { join } from 'path';
import { Review } from './review/review.entity';
import { ReviewController } from './review/review.controller';
import { ReviewService } from './review/review.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Author]),
    TypeOrmModule.forFeature([Book]),
    TypeOrmModule.forFeature([Review]),
    TypeOrmModule.forRootAsync({
      name: 'default',
      useFactory: async () => ({
        type: 'mysql',
        insecureAuth: true,
        synchronize: false,
        cache: true,
        entities: [join(__dirname, '**', '*.entity.{ts,js}')],
        host: 'localhost',
        port: 3306,
        charset: 'utf8mb4',
        username: 'root',
        password: 'toor',
        database: 'typeorm-samples',
      }),
    }),
  ],
  controllers: [AuthorController, BookController, ReviewController],
  providers: [AuthorService, BookService, ReviewService],
})
export class AppModule {}
