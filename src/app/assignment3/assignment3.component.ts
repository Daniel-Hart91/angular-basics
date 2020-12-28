import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styles: [ `
  .whiteText {
    color: white;
  }` ]
})
export class Assignment3Component implements OnInit {
  displayCode = false;
  buttonClicks = [];
  clicks = 0;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCode(){
    this.displayCode = !this.displayCode;
    this.clicks ++
    this.buttonClicks.push(this.clicks)
  }

 

}
