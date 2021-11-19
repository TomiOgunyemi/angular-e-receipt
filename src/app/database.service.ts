import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

   Users = [{
    question: "What is the name of the president?",
    name:"Buhari",
    age:"23",
    email:" tomi@gmail.com"
   
},{
    question: "What is the name of the president?",
    name:"Teslim",
    age:10,
    email:" tom@gmail.com"
},{
    question: "Who is the greatest footballer?",
   
    name:"Ronaldo",
    age:12,
    email:"ronai@gmail.com"
},{
    question: "Where is Ibadan?",
    name:'Nigeria',
    age: 34,
    email:'Nigeria@yahoo.com'
  
}]
message='Hello People';
}


