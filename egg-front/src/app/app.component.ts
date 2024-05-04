import { Component } from '@angular/core';

import { AlveoleService } from './services/alveole.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ AlveoleService ]
})
export class AppComponent {
  title = 'front-egg';
  
  
 
  constructor(private http: HttpClient) {}



}


