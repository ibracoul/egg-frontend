import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AlveoleService } from '../../services/alveole.service';

@Component({
  selector: 'app-alveole',
  templateUrl: './alveole.component.html',
  styleUrl: './alveole.component.css',
  providers:[AlveoleService]
})
export class AlveoleComponent {
  readonly API_URL = "http://localhost:8080"
  readonly ADD_ALVEOLE = "/api/v1/aviole/add"
  readonly LIST_ALVEOLE = "/api/v1/aviole/liste"

  formData = {
    quantite: null,
    prix_uni: null,
    prix_tt: null,
    wati: '',
    taille: ''
  };

  data: any;

  isContentVisible: boolean = false;

  toggleContentVisibility() {
    this.isContentVisible = !this.isContentVisible;
  }

  constructor(private http: HttpClient) {}

  submitOrders() {
    this.http.post(this.ADD_ALVEOLE, this.formData)
      .subscribe(
        response => console.log('Réponse de l\'API Spring Boot:', response),
      );
  }

  getListAlveole(){
    return this.http.get<any>(this.API_URL+this.LIST_ALVEOLE).subscribe((response) =>{
      this.data = response;
    } )
    
  }





  ngOnInit(): void {
    this.getListAlveole();
  }



}
