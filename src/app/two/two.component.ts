import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  items = ['item1', 'item2', 'item3', 'item4'];

  info=''

  constructor(private serve:DatabaseService) { }

  ngOnInit(): void {
   
  }
  addItem(newItem: string) {
    this.items.push(newItem);
  }
 
}
