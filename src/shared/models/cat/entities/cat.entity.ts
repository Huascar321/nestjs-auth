import { IntersectionType } from '@nestjs/swagger';

export class Cat {
  id: number;
  name: string;
  age: number;
  breed: string;
}
export class CatRel {}
export class CatFull extends IntersectionType(Cat, CatRel) {}
