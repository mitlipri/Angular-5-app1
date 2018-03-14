import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';     
import { AboutComponent } from './about/about.component';

// We have to mention the paths of the components in the below format:
const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    
    {
        //    route Parameter; we can have multiple route paraamters like path: 'about/:id/:name/:age'
        path: 'about/:id',
        component: AboutComponent
    }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
