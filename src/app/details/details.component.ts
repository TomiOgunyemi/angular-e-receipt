import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../database.service';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  Users:any;
 data:any  

  constructor(private route:ActivatedRoute, private service:DatabaseService) { }

  ngOnInit(): void {    
    this.Users = this.service.Users
    let id:any =this.route.snapshot.paramMap.get('i');
    console.log(id); 
    // this.data = this.Users[id]
  }

}
