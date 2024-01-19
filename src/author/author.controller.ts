// src/author.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AuthorService } from './author.service';
import { Author } from './author.entity';

@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  create(@Body() author: Partial<Author>): Promise<Author> {
    return this.authorService.create(author);
  }

  @Get()
  findAll(): Promise<Author[]> {
    return this.authorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Author | null> {
    return this.authorService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.authorService.remove(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() author: Partial<Author>,
  ): Promise<void> {
    return this.authorService.update(+id, author);
  }
}
