import { Component, OnInit } from '@angular/core';

import { LuckyNumber } from '../lucky-number';
import { LuckyNumberService } from '../lucky-number.service';
@Component({
  selector: 'app-lucky-numbers',
  templateUrl: './lucky-numbers.component.html',
  styleUrls: ['./lucky-numbers.component.css']
})
export class LuckyNumbersComponent implements OnInit {

  numbers: LuckyNumber[];	

  constructor( private luckyNumberservice:LuckyNumberService ) { }

  ngOnInit(): void {
	this.getNumbers();
  }

  getNumbers(): void {
	this.luckyNumberservice.getNumbers()
	.subscribe(numbers => this.numbers = numbers);
  }

}
