import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from '../../core/models/cat.dto';
import { Observable } from 'rxjs';
import { Cat } from '../../core/models/cat.model';

@Controller('cats')
export class CatController {
  constructor(private catService: CatService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    this.catService.create(createCatDto);
  }

  @Get()
  findAll(): Observable<Cat[]> {
    return this.catService.findAll();
  }
}
