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
import { Observable } from 'rxjs';
import { JoiValidatorPipe } from '../../core/pipes/validators/joi-validator.pipe';
import { CatCreateSchema } from '../../../prisma/generated/schemas';
import { Cat, CreateCatDto } from '../../shared/models/cat';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { RequirePermission } from '../../core/decorators/require-permission.decorator';

@ApiTags('cats')
@Controller('cats')
export class CatController {
  constructor(private catService: CatService) {}

  @Post()
  @UsePipes(new JoiValidatorPipe(CatCreateSchema))
  create(@Body() createCatDto: CreateCatDto) {
    this.catService.create(createCatDto);
  }

  @RequirePermission(2000)
  @Get()
  @ApiOkResponse({ type: [Cat] })
  findAll(): Observable<Cat[]> {
    return this.catService.findAll({});
  }

  @Get(':id')
  @ApiOkResponse({ type: Cat })
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
