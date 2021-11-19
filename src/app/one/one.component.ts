import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
    @Input() Message ='';
    @Output() Child_Info = '';
    @Output() newItemEvent = new EventEmitter<string>();

  Mymessage:any='';

  info=''

  constructor(
    public serve:DatabaseService
  ) { 

  }

  ngOnInit(): void {
    
  }
  change(){
    this.serve.message=this.info;
  }

  // addInfo(value: string) {
  //   this.Child_Info.emit(value);
  // }
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  
}
