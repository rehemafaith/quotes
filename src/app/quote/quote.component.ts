import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { Quote } from '../quote'
import { maybeQueueResolutionOfComponentResources } from '@angular/core/src/metadata/resource_loading';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  @Input() quote:Quote
  @Output() like= new EventEmitter<boolean>();
    // toogleDetails(index){
    //   this.quotes[index].showQuote = !this.quotes[index].showQuote;
  
  
    
    
  // }
  upvote:number=0;
  downvote:number=0;
  thumbsUp(){
    this.upvote++;
  }
  
  thumbsDown(){
    this.downvote++;
  }

 
  ngOnInit() {
  }

}
