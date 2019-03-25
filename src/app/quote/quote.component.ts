import { Component, OnInit,Input } from '@angular/core';
import { Quote } from '../quote'
import { maybeQueueResolutionOfComponentResources } from '@angular/core/src/metadata/resource_loading';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  @Input() quote:Quote
    // toogleDetails(index){
    //   this.quotes[index].showQuote = !this.quotes[index].showQuote;
  
  
    
    
  // }

  ngOnInit() {
  }

}
