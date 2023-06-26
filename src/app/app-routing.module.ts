import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './Component/view/view.component';
import { AddComponent } from './Component/add/add.component';
import { HomeComponent } from './Component/home/home.component';
import { DetailsComponent } from './Component/details/details.component';
import { EditComponent } from './Component/edit/edit.component';
import { RegistrationComponent } from './Auth/registration/registration.component';
import { LoginComponent } from './Auth/login/login.component';
import { ProfileComponent } from './Auth/profile/profile.component';

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"add_item", component:AddComponent},
  {path:"view", component:ViewComponent},
  {path:"view/details/:id", component:DetailsComponent},
  {path:"view/details/:id/edit", component:EditComponent},
  {path:"registration", component:RegistrationComponent},
  {path:"login", component:LoginComponent},
  {path:"profile", component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
