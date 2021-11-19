import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-receipts',
  templateUrl: './e-receipts.component.html',
  styleUrls: ['./e-receipts.component.css']
})
export class EReceiptsComponent implements OnInit {

  invoice: any[]=[{product:'', price:"", quantity:'', total:0, isLocked:false}]
  grandTotal:any=0;

  constructor() { }

  ngOnInit(): void {
  }
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

