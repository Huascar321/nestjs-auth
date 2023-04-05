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
import { CreateCatDto, createCatSchema } from '../../core/models/cat/cat.dto';
import { Observable } from 'rxjs';
import { Cat } from '../../core/models/cat/cat.model';
import { JoiValidatorPipe } from '../../core/pipes/validators/joi-validator.pipe';

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
    return this.catService.findAll();
  }

  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })
    )
    id: number
  ) {
    return this.catService.findOne(id);
  }
}
