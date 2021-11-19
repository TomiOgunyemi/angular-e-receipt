import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ExamServiceService } from '../exam-service.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  countries:any = [];
  states:any=[];
  formdata:any;
  
  constructor(
    private tomi:ExamServiceService,
    public fb:FormBuilder, 
    private snackbar :MatSnackBar  ) { }

  countriesForm = this.fb.group({
  country:[''],
  state:['']
})
  ngOnInit(): void {
    this.fetch_countries()
  }

  fetch_countries(){
    this.tomi.getcountries().subscribe(
      (res:any)=>{
        this.countries = res 
        console.log(res)
      },
      err =>{
        console.log(err)
      })
  }
  
  set_state(country:any){
    console.log(country.value)
    let sel:any = this.countries.filter((f:any)=>{
      return f.country == country.value;
    })
    this.states = sel[0].state;
    console.log(sel[0].state);
  }

  submit(email:any,password:any){
    // package our data
    let formdata = {
      email: email.value,
      password: password.value 
    }

    this.tomi.sendEmail(formdata).subscribe(
      (res:any)=>{
        console.log(res)
      },
      (err:any)=>{
        console.log(err)
        this.snackbar.open("This is an error")
      }
    )
    }
  }
  
   