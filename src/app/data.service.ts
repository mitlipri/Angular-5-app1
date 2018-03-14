
// It uses the @Injectable() decorator, which means we can import it into other components and access its properties and methods. A great way of sharing data between components is to use the Rxjs BehaviorSubject library. 
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class DataService {
  
// This allows us to set the initial goal through goals as a BehaviorSubject, and then define a goal property as an observable.
  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  goal = this.goals.asObservable();    

  constructor() { }

  // We also created a changeGoal method that we will call in order to update the goals property.
  changeGoal(goal) {
    this.goals.next(goal)
  }

}
