import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from 'src/app/components/add-task/add-task.component';
import { DashHomeComponent } from 'src/app/components/dash-home/dash-home.component';
import { DashMenuComponent } from 'src/app/components/dash-menu/dash-menu.component';
import { PlannerComponent } from 'src/app/components/planner/planner.component';
import { ProfileComponent } from 'src/app/components/profile/profile.component';
import { TaskComponent } from 'src/app/components/task/task.component';

const routes: Routes = [
  {
    path:"",
    component: DashMenuComponent,
    children: [
      {path:"", component: DashHomeComponent},
      {path:"taskview", component: TaskComponent},
      {path:"added", component: AddTaskComponent},
      {path:"planner", component: PlannerComponent},
      {path:"profile", component: ProfileComponent}
    ]
  }
];

@NgModule({
  declarations:[
    DashMenuComponent,
    DashHomeComponent,
    AddTaskComponent,
    TaskComponent,
    ProfileComponent,
    PlannerComponent,
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
