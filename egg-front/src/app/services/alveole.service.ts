import { Injectable } from '@angular/core';

import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AlveoleService {
  

  constructor(private http: HttpClient) { }

  

  // getAlveole(){
  //   return this.httpClient.get<any>(this.API_URL+this.ENDPOINT_ALVEOLE)
  // }

  
}




