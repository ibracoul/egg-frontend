import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Alveole } from '../../models/alveole';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from 'express';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {

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
    id: '',
    quantite: null,
    prix_uni: null,
    prix_tt: null,
    wati: '',
    taille: ''
  };

  constructor(private http: HttpClient, private location: LocationStrategy){}
  toggleContentVisibility() {
    this.isContentVisible = !this.isContentVisible;
  }

  ngOnInit(): void {
    this.alveole = this.location.getState();
  }

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
