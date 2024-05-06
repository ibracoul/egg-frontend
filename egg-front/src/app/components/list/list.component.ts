import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent{
  
  constructor(private donnee: DataService) {}
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

}
