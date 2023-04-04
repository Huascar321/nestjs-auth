import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
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

  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.catService.findOne(id);
  }
}
