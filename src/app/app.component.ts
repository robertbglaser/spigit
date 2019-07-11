import { Component, OnInit } from '@angular/core';
import { SpigitComponent } from '/Users/bobglaser/spigit-codetest/src/app/spigit/spigit.component'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class SpigitComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
 
  constructor() { }
 
  ngOnInit() {
  }
 
}