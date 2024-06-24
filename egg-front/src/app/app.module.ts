import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AlveoleComponent } from './components/alveole/alveole.component';
import { ListComponent } from './components/list/list.component';
import { RecordComponent } from './components/record/record.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { UpdateComponent } from './components/update/update.component';
import { ClientsComponent } from './components/clients/clients.component';


@NgModule({
  declarations: [
    AppComponent,
    RecordComponent,
    RegisterComponent,
    HomeComponent,
    AlveoleComponent,
    ListComponent,
    FooterComponent,
    ContactComponent,
    UpdateComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
],

  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
