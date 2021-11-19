import { Component, OnInit } from '@angular/core';
import {ExamServiceService} from '../exam-service.service';


@Component({
  selector: 'app-ex-two',
  templateUrl: './ex-two.component.html',
  styleUrls: ['./ex-two.component.css']
})

export class ExTwoComponent implements OnInit {



  constructor(public servee1:ExamServiceService) { }

  ngOnInit(): void {

  }
  num2=0
 
  set_num2(){
  this.servee1.set_num2(this.num2)
}
  
}
