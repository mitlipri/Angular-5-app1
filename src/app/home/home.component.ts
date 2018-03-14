import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
      
// allows us to define the name of the animation in the first parameter, and then an array of other animation-specific functions in the next. We've made a new animation called goals here 
      trigger('goals',[
 
// defines a transition between two different states. States can be defined explicitly through the state function, or we can use a wildcard * as a state. This means, for the animation trigger goals, if there is any transition taking place, execute the following.        
            transition('* => *', [
 
// we're going to use the query function to target DOM elements that are only entering the DOM: 
                
           // we're setting any DOM element that is bound to the goals animation, to an opacity of 0 when it enters.
               query(':enter', style({ opacity: 0 }), {optional: true}),

                 // we're creating a stagger animation with a delay of 300ms between each element.
                query(':enter', stagger('300ms', [
                 
                // we're animating the elements with a .6s ease-in animation, and using keyframes to allow us to create a multi-step animation for each item.        
                    animate('.6s ease-in', keyframes([
                    style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
                    style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
                    style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
                  ]))]), {optional: true}),
                
                
                 query(':leave', stagger('300ms', [        
                    animate('.6s ease-in', keyframes([
                    style({opacity: 1, transform: 'translateY(0)', offset: 0}),
                    style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
                    style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
                  ]))]), {optional: true})
                  

            ])
          
      ])
  ]    
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = "Add Item";
  goalText: string = "";
  goals = [];


// We've referenced this._data.changeGoal() when the app loads, and when we add an item and remove an item.
  constructor(private _data: DataService) { }

// This part of the code runs whenever the component is loaded. 
  ngOnInit() {
      
      this._data.goal.subscribe(res => this.goals = res);
      this.itemCount = this.goals.length; 
      this._data.changeGoal(this.goals);
  }

  AddItem(){
      
      this.goals.push(this.goalText);
      this.goalText = "";
      this.itemCount = this.goals.length;
      this._data.changeGoal(this.goals);
  }

  removeItem(i){
      this.goals.splice(i,1);
      this._data.changeGoal(this.goals);
  }


}
