import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UsePipes
} from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto, createCatSchema } from '../../shared/models/cat/cat.dto';
import { Observable } from 'rxjs';
import { JoiValidatorPipe } from '../../core/pipes/validators/joi-validator.pipe';
import { Cat } from '@prisma/client';

@Controller('cats')
export class CatController {
  constructor(private catService: CatService) {}

  @Post()
  @UsePipes(new JoiValidatorPipe(createCatSchema))
  create(@Body() createCatDto: CreateCatDto) {
    this.catService.create(createCatDto);
  }

  @Get()
  findAll(): Observable<Cat[]> {
    return this.catService.findAll({});
  }

  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })
    )
    id: number
  ) {
    return this.catService.findOne({ id });
  }
}
