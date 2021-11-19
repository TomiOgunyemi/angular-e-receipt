import { Component, OnInit } from '@angular/core';
import { ExamServiceService } from '../exam-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  AllData:any=[];
  constructor(private tomi:ExamServiceService) { }

  ngOnInit(): void {

    this.tomi.get_data().subscribe(
      (res:any)=>{
        this.AllData=(res)
    },(err)=>{
      console.log(err)
    })
    this.tomi.get_data().subscribe(
      (res) => {
      console.log(res)
    },(err)=>{
      console.log(err)
    })
  }
getinfo(){
  
}
}
