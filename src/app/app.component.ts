import { Component, OnInit } from '@angular/core';
import { userDataList } from './dataList';

@Component({
  selector: '-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class spigitComponent implements OnInit {
 
 // heroes = HEROES;
 // selectedHero: Hero;
 
  constructor() { }
 
  ngOnInit() {
  }
 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
