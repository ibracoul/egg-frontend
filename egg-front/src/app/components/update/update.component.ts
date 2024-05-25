import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {

  readonly UP_ORDER = "/api/v1/aviole/up/{id}"
  formData = {
    quantite: null,
    prix_uni: null,
    prix_tt: null,
    wati: '',
    taille: ''
  };
  prix: number[] = [2000, 2500, 3000];
  isContentVisible: boolean = false;

  constructor(private http: HttpClient){}
  toggleContentVisibility() {
    this.isContentVisible = !this.isContentVisible;
  }

  public updateOrder(){
    this.http.put(this.UP_ORDER, this.formData)
      .subscribe(
        response => console.log('Réponse de l\'API Spring Boot:', response),
      );
  }

}
