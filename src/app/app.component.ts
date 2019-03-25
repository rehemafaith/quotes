import { Component } from '@angular/core';
import { Quote } from './quote';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  quotes= [
    new Quote ('Life is easy', 'Rehema ','Faith',0,0),
   ]
   addQuote(quote){

    this.quotes.push(quote)
   }
}
  


