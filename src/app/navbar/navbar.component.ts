import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isAuthenticated = false;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.authService.messager.subscribe((message: boolean) => {
      console.log("Un utilisateur s'est connecté ou déconnecté ! ");
      console.log(message);
      this.isAuthenticated = message;
    })
    this.authService.newsletter.subscribe((textNewsletter: string) => {
      alert(textNewsletter);
    })
  }

  onClickLogout() {
    /**
     *  - Supprimer le token dans le localStorage
        - Modifier la valeur de la propriété isAuthenticated à false
        - Rediriger l'utilisateur vers la page de connexion ("sign-in")
     */
  }

}