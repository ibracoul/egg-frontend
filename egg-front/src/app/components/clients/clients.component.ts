import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

  data = this.donnee.data;
  isContentVisible = this.donnee.isContentVisible;

  constructor(private donnee: DataService) {}


  public getListClient(): void{
    this.donnee.getDataClient().subscribe((response) =>{
      this.data = response;
    } )
    
  } 

  

  ngOnInit(): void{
    this.getListClient();
   
  }

}
