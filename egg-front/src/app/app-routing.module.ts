import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AlveoleComponent } from './components/alveole/alveole.component';
import { ListComponent } from './components/list/list.component';
import { ContactComponent } from './components/contact/contact.component';
import { UpdateComponent } from './components/update/update.component';
import { ClientsComponent } from './components/clients/clients.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent

},
{
  path: 'contact',
  component: ContactComponent

},
{
    path: 'register',
    component: RegisterComponent
},
{
  path: 'client',
  component: ClientsComponent

},
{
  path: 'update',
  component: UpdateComponent
},
{
  path: 'alveole',
  component: AlveoleComponent
},
{
  path: 'list',
  component: ListComponent
},
{
    path: 'home',
    component: HomeComponent
},
{
    path: '', redirectTo: 'home', pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
