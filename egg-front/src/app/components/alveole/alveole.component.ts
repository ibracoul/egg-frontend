import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AlveoleService } from '../../services/alveole.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-alveole',
  templateUrl: './alveole.component.html',
  styleUrl: './alveole.component.css',
  providers:[AlveoleService]
})
export class AlveoleComponent{
  readonly ADD_ALVEOLE = "/api/v1/aviole/add"
  
 

  formData = {
    quantite: null,
    prix_uni: null,
    prix_tt: null,
    wati: '',
    taille: ''
  };
  prix: number[] = [2000, 2500, 3000];

  isContentVisible: boolean = false;
  toggleContentVisibility() {
    this.isContentVisible = !this.isContentVisible;
  }

  constructor(private http: HttpClient, private donnee: DataService) {}

  contenteVisibility = this.donnee.toggleContentVisibility();
  

  submitOrders() {
    this.http.post(this.ADD_ALVEOLE, this.formData)
      .subscribe(
        response => console.log('Réponse de l\'API Spring Boot:', response),
      );
      (document.getElementById('myForm') as HTMLFormElement).reset();
  }
}


