import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Alveole } from '../../models/alveole';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {

  readonly UP_ORDER = "/api/v1/alveole/up"
  formData = {
    quantite: null,
    prix_uni: null,
    prix_tt: null,
    wati: '',
    taille: ''
  };
  prix: number[] = [2000, 2500, 3000];
  isContentVisible: boolean = false;
  alveole: any = {
    id: 1,
    quantite: null,
    prix_uni: null,
    prix_tt: null,
    wati: '',
    taille: ''
  };
  // alveole = new Alveole(
  //   this.formData.quantite,
  //   this.formData.prix_uni,
  //   this.formData.prix_tt,
  //   this.formData.wati,
  //   this.formData.taille
  // );


  constructor(private http: HttpClient){}
  toggleContentVisibility() {
    this.isContentVisible = !this.isContentVisible;
  }

  // public updateOrder(){
  //   this.http.put(this.UP_ORDER, this.formData)
  //     .subscribe(
  //       response => console.log('Réponse de l\'API Spring Boot:', response),
  //     );
  // }

  updateOrder(id: number, alveole: any): Observable<any> {
    const url = `${this.UP_ORDER}/${id}`;
    return this.http.put(url, alveole, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    throw error;
  }

  onUpdate(): void {
    this.updateOrder(this.alveole.id, this.alveole).subscribe(
      response => {
        console.log('User updated successfully', response);
      }
    );
  }

  

}
