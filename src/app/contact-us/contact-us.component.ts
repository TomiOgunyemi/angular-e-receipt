import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms'
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
    submitted= false;

  constructor( private fb : FormBuilder, private route:Router) { }
  formData = this.fb.group({
    email:['hello', [Validators.required, Validators.email]],
    password:['pass',[Validators.required]]
  })

  message:string=""
  userEmail:any='Tomi@gmail.com';
  userPassword:any='12345'

  get email(){
    return this.formData.get('email')
  }

  get password(){
    return this.formData.get('password')
  }
  ngOnInit(): void {
  }
  
    submit(){
      let data = this.formData.value;
      this.submitted=true
      this.message=""
      setTimeout(()=>{
        this.submitted = false;
        if(data.email== this.userEmail && data.password==this.userPassword){
          localStorage.setItem('loggedIn','info')
           this.route.navigate(['/dashboard'])
        
        }
        else{ this.message='Invalid login detail'
      }
        this.formData.reset()
        
      }, 2000)
    }
    change(){
      this.formData.patchValue({email:"1234567890"})
    }
}
