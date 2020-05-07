import { Component, OnInit, Input } from '@angular/core';
import { DonutsService } from '../donuts.service';
import { Results, Donuts, Donut } from '../interfaces/donuts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.css'],
})
export class DonutDetailComponent implements OnInit {
  @Input() donuts:Donuts;
 

  constructor(
    private donutService: DonutsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
  }
}
