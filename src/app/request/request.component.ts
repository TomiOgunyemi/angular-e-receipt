import { Component, OnInit } from '@angular/core';
import { ExamServiceService } from '../exam-service.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  AllData:any=[];
  fetcher:any =[];

  constructor(private tomi:ExamServiceService) { }

  ngOnInit(): void {
    this.get_tolu()
  }

  get_tolu(){
    this.tomi.get_data().subscribe(
      (res:any)=>{
        console.log(res)
        this.fetcher =(res)
    },(err)=>{
      console.log(err)
    })
  }

}


