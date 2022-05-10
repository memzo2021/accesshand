import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-admin-sign-in',
  templateUrl: './admin-sign-in.components.html',
  styleUrls: ['./admin-sign-in.component.css'],
})
export class AdminSignInComponent implements OnInit {
  signInError = false;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void { }
  /**
   // TODO UN PLAN D'ACTION : 
   * 
   // TODO - Création du composant page-sign-in : ng g c sign-in
   // TODO - MàJ Routing pour afficher notre page sign in (http://locahost:4200/sign-in)
   // TODO- MàJ de notre html de nav-bar pour pouvoir accéder à la page sign-in au clic
   // TODO  - Ajout du code du formulaire HTML en static 
   // TODO - Transformation du formulaire statique en template driven  
   // TODO  - Affichage du contenu des champs du formulaire dans notre console !
   // TODO - Création d'une nouvelle méthode dans notre service (pour POST vers /login)
   // TODO - Appel de cette méthode dans notre composant page-sign-in pour envoyer nos info de connexion vers l'API
   // TODO - S'inspirer de ce qu'on a fait sur le sign-up (pour la partie TS)
   // TODO - Affichage du token reçu si la connexion est une réussite
   //  YOUPI !!! 😄
   */
  onSubmitSignIn(form: NgForm) {
    console.log(form.value);
    const username = form.value.username;
    const password = form.value.password;

    const requeteObservable = this.authService.logUser(username, password);

    requeteObservable.subscribe({
      //// TODO method a appeler en cas de succès
      next: (resp: any) => {
        console.log(resp.accessToken);

        this.router.navigateByUrl('/');
        // TODO stockage de mon token
        //// TODO Localstorage
        localStorage.setItem('token', resp.accessToken);
      },
      //// TODO method a appeler en cas d'error
      error: (err: any) => {
        // TODO // affichage message d'erreur coté page
        this.signInError = true;
        console.log(err);
      },
    });

    /**
     * Observable.subscribe({
     *  next: () => { *instructions* },
     *  error: () => { *instructions* }
     * })
     */
  }
}
