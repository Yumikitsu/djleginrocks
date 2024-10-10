import { Component } from '@angular/core';
import { Hamster } from '../models/hamster';
import { HamstersService } from '../hamsters.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  hamsters:Hamster[] = [];
  constructor(private readonly hamstersService:HamstersService) {
    this.hamsters = hamstersService.hamsters;
  }
}
