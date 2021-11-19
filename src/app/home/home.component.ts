import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data_base:any='Tomisin';

  users:any[]=['Tomi','Tolu','Tolani','July'];

  invoice: any[]=[{product:'', price:"", quantity:'', total:0, isLocked:false}]
  grandTotal:any=0;
 
  date:any=new Date()


  constructor() { }

  ngOnInit(): void {
  }
  hello(){
    alert('Tomisin is here')
  }
  // remove(index:number){  
  //   this.users.splice(index,1)
  // }
  add(){
    let arrayLength = this.invoice.length-1

    if (this.invoice[arrayLength].product == '' && this.invoice[arrayLength].price=='' && this.invoice[arrayLength].quantity=='') {
        return
    }
    
    this.invoice.push({product:'', price:"", quantity:'', total:0})
    this.invoice.forEach(element=>{
      element.isLocked = true 
    })
    
    this.invoice[this.invoice.length - 1].isLocked=false
  }
  grandtotal(){
      this.grandTotal=0

     this.invoice.forEach(element=>{
      this.grandTotal+=element.total

    

    })
  }
  delete(index:number){
    this.invoice.splice(index, 1) 
    this.grandtotal()
  }
    // remove(){                      //to remove from the bottom
    //     this.invoice.pop()
    // }


  edit(index:any) {
    this.invoice[index].isLocked = !(this.invoice[index].isLocked)
  }
    
  }