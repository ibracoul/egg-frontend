import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{

  
  constructor(private donnee: DataService, private http: HttpClient) {}
  data = this.donnee.data;
  isContentVisible = this.donnee.isContentVisible;


  public getListAlveole(): void{
    this.donnee.getData().subscribe((response) =>{
      this.data = response;
    } )
    
  } 

  ngOnInit(): void{
    this.getListAlveole();
   
  }

  deleteOrder(id: number): void {
    if(confirm(`tu veux supprimer la commande avec l'id ${id}`)) {
      this.http.delete(`/api/v1/alveole/sup/${id}`).pipe(
        catchError(this.handleError)
      ).subscribe({next: () => {
        alert(`la commande avec l'id ${id} a été supprimée avec succès`)
        this.getListAlveole();
      }, error: (err) => {
        console.log(err);
      }});
    }
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    throw error;
  }

}
