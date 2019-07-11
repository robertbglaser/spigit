import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
 
import { SpigitComponent } from './app.component';
//import { HeroesComponent } from './heroes/heroes.component';
 
@NgModule({
  declarations: [
    SpigitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [SpigitComponent]
})
export class AppModule { }