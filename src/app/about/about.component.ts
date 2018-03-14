import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

// This will give us access to the route parameters:
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})


export class AboutComponent implements OnInit {
    
  goals: any;    

// create an instance of ActivatedRoute through dependency injection, which is done in the constructor of the class
  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) { 
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
      this._data.goal.subscribe(res => this.goals = res);
  }
  
// create a method that will call the router path of home    
  sendMeHome() {
    this.router.navigate(['']);
  }    

}




