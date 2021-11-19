import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamServiceService } from '../exam-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  siteName:any="";
  questions:any= [];
 

  constructor(private tomi:ExamServiceService) { }

  ngOnInit(): void {
    this.fetch_sitename()
    this.fetch_question()
  }
  fetch_sitename(){
    this.tomi.getSiteName().subscribe(
      (res:any)=>{
        console.log(res)
        this.siteName= res.sitename
      },
      (err)=>{
        console.log(err)
      }
    )
  }

  fetch_question(){
    this.tomi.getquestions().subscribe(
      (res:any)=>{
        console.log(res)
        this.questions= res
      },
      (err)=>{
        console.log(err)
      }
    )
  }

}
