import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';
import { range } from 'rxjs';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit{

  @Input('myForEm') numbers!: number[]

  constructor(private container : ViewContainerRef, private template : TemplateRef<any>) {}

  ngOnInit(): void {
    
    for(const x in this.numbers){
      this.container.createEmbeddedView(
        this.template, { $implicit : this.numbers[x]}
      )
    }
  }

  /*
    uso no html
    <ul>
        <li *myFor = "let n em [1, 2, 3]">{{n}}</li>
    </ul>
  */                                                                                                
}
