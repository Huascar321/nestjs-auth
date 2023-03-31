import { Injectable } from '@nestjs/common';
import { Cat } from '../../core/models/cat.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class CatService {
  private readonly cats: Cat[] = [];

  create(cat: Cat): void {
    this.cats.push(cat);
  }

  findAll(): Observable<Cat[]> {
    return of(this.cats);
  }
}
