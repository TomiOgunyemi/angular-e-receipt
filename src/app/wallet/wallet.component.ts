import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  Profile=[{
    name:'Tomi',
    date: "20/3/20",
    amount:1200,
  },{
    name:'Yewa',
    date:"20/3/20",
    amount:1200,
  },{
    name:'Dami',
    date:"20/3/20",
    amount:1200,
  },{
    name:'Remi',
    date:"20/3/20",
    amount:1200,
  }
]
data:any
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    let identity:any=this.route.snapshot.paramMap.get('i')
    this.data = this.Profile[identity]
  }

}
