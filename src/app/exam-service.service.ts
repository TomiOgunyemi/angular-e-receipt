import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamServiceService {

  base_url: string ="https://api.piggybit.ng/api"

  constructor(
    public http:HttpClient
  ) { }

public fetch_data(){
    return this.http.get(`${this.base_url}`);
  }

  get_data(){
  return this.http.get("https://jsonplaceholder.typicode.com/todos");
}
  getSiteName(){
    return this.http.get(`${this.base_url}/sqi/sitename`)
  }

  signup(data:any){
    return this.http.post(`${this.base_url}/this.signUp`,data)
  }
  getquestions(){
    return this.http.get(`${this.base_url}/sqi/questions`)
  }

  getcountries(){
    return this.http.get(`${this.base_url}/sqi/countries`)
  }

  sendEmail(data:any){
    return this.http.post(`${this.base_url}/sqi/body`,data)
  }

  num1=0;
  num2=0;

  message='hello'
 
  set_num1(param:any){
    this.num1=param
  }
  set_num2(param:any){
    this.num2=param
  }


}

