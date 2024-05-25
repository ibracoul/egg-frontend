import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{

  
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
