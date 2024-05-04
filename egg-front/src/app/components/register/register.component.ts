import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  public user: User = new User();

  constructor(){}

  ngOnInit(): void{

  }

}
