import { Injectable } from '@angular/core';
import { Hamster } from './models/hamster';
import { HAMSTERS } from '../data/hamsters';

@Injectable({
  providedIn: 'root'
})
export class HamstersService {

  public hamsters:Hamster[] = HAMSTERS;

  public GetHamsterById(id:number):Hamster|null {
    const hamster = this.hamsters.find(hamster => hamster.id === id);
    if(!hamster) {
      return null;
    }
    return hamster;
  }
}
