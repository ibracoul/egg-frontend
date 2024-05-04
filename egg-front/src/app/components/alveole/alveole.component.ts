import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alveole',
  templateUrl: './alveole.component.html',
  styleUrl: './alveole.component.css'
})
export class AlveoleComponent {
  readonly API_URL = "http://localhost:8080"
  readonly ADD_ALVEOLE = "/api/v1/aviole/add"
  readonly LIST_ALVEOLE = "/api/v1/aviole/list"

  formData = {
    quantite: null,
    prix_uni: null,
    prix_tt: null,
    wati: '',
    taille: ''
  };

  constructor(private http: HttpClient) {}

  submitForm() {
    this.http.post(this.ADD_ALVEOLE, this.formData)
      .subscribe(
        response => console.log('Réponse de l\'API Spring Boot:', response),
      );
  }

  getListAlveole(): Observable<any> {
    return this.http.get<any>(this.LIST_ALVEOLE);
  }

}
