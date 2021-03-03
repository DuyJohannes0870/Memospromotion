import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PromotionComponent } from './promotion/promotion.component';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { UserinfoComponent } from './admin/userinfo/userinfo.component';

const routes: Routes = [
  { path: '', redirectTo: '/promotion', pathMatch: 'full' },
  { path: 'promotion', component: PromotionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'userinfo', component: UserinfoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
