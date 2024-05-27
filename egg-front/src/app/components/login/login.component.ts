import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  readonly ADD_USER = "/api/v1/user/add"
  formDataUser = {
    lastName: '',
    firstName: '',
    email: '',
    tel: '',
    adresse: ''
  };

  constructor(private http: HttpClient) {}

  isContentVisible: boolean = false;
  toggleContentVisibility() {
    this.isContentVisible = !this.isContentVisible;
  }

  submitUser() {
    this.http.post(this.ADD_USER, this.formDataUser)
      .subscribe(
        response => console.log('Réponse de l\'API Spring Boot:', response),
      );
      (document.getElementById('myForm') as HTMLFormElement).reset();
  }

}
