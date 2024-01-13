import { Component,Input,Output,EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime, delay } from 'rxjs';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styles: [
  ]
})
export class SearchboxComponent implements OnInit, OnDestroy{
  private debauncer:Subject<string>= new Subject<string>();
  private debauncerSusbcription?:Subscription;
@Input()
public placeholder: string='';

@Input()
public initiValvalue: string='';

@Output()
public onvalue= new EventEmitter<string>()

@Output()
public ondebounce= new EventEmitter<string>()

ngOnInit(): void {

  this.debauncerSusbcription= this.debauncer.pipe(
      debounceTime(1000)
    ).subscribe( value=>{
      this.ondebounce.emit(value)
    })
}
ngOnDestroy(): void {
    console.log('destruido')
    this.debauncerSusbcription?.unsubscribe()
}
emitvalue(value:string):void{
this.onvalue.emit(value);
}
onkeypress(searchterm:string){
this.debauncer.next(searchterm)}


}
