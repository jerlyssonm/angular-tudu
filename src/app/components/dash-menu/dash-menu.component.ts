import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AddTaskComponent } from '../add-task/add-task.component';
import { DashHomeComponent } from '../dash-home/dash-home.component';
import { PlannerComponent } from '../planner/planner.component';
import { ProfileComponent } from '../profile/profile.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-dash-menu',
  templateUrl: './dash-menu.component.html',
  styleUrls: ['./dash-menu.component.css']
})
export class DashMenuComponent implements OnInit {

  constructor(router: Router) {
    router.events
    .pipe(filter((event:any)=> event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd | any) => {
      switch (event.url) {
        case '/dashboard':
          DashHomeComponent;
          break;

        case '/planner':
          PlannerComponent;
          break;
        
        case '/profile':
          ProfileComponent;
          break;
      
        case '/added':
          AddTaskComponent;
          break;  
      }
    })
   }

  ngOnInit(): void {
  }

}
