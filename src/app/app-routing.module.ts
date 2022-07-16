import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAuthComponent } from './components/form-auth/form-auth.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { WellcomeComponent } from './wellcome/wellcome.component';

const routes: Routes = [
  {path:"", component: WellcomeComponent},
  {path:"login", component: FormAuthComponent},
  {path:"register", component: FormRegisterComponent},
  {path:"dashboard", loadChildren: () => import('./modules/dashboard/dashboard.module').then(
    m => m.DashboardModule
  )}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
