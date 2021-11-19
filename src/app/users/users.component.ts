import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../database.service';
import { ExamServiceService } from '../exam-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  Users:any ; 
  total:any;
  num1:any;
  num2:any
  constructor(public service: DatabaseService,public servee1:ExamServiceService,public servee2:ExamServiceService) { }

  ngOnInit(): void {
    
  }



  setnum1(param:any){
      this.num1=param;
      console.log(this.num1);
      
  }
  setnum2(param:any){
      this.num2=param;
      console.log(this.num1);
  }
  
}
