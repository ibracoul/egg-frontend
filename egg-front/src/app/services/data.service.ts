import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly API_URL = "http://localhost:8080"
  readonly LIST_ALVEOLE = "/api/v1/aviole/liste"

  data:any;
  
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.API_URL+this.LIST_ALVEOLE);
  }
  
  isContentVisible: boolean = false;
  public toggleContentVisibility() {
    return this.isContentVisible = !this.isContentVisible;
  }


  

  

  
}