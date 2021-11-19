import { Component, OnInit } from '@angular/core';
import {ExamServiceService} from '../exam-service.service';

@Component({
  selector: 'app-ex-one',
  templateUrl: './ex-one.component.html',
  styleUrls: ['./ex-one.component.css']
})
export class ExOneComponent implements OnInit {

   
  constructor(public servee1: ExamServiceService) { }

  ngOnInit(): void {
   
  }
  num1=0;
  set_num1(){
    this.servee1.set_num1(this.num1)
  }
}
