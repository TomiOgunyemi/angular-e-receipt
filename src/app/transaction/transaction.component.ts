import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {


  Profile=[{
    name:'Tomi',
    date: new Date(),
    amount:1200,
  },{
    name:'Yewa',
    date: new Date(),
    amount:1200,
  },{
    name:'Dami',
    date: new Date(),
    amount:1200,
  },{
    name:'Remi',
    date: new Date(),
    amount:1200,
  }
]
  constructor() { }
  
  ngOnInit(): void {
  }

}
