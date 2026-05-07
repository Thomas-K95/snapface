import { Component, inject } from '@angular/core';
import { AuthStore } from "../auth-store";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  private authApi = inject(AuthStore);
  private router = inject(Router);

  login(): void {
    this.authApi.login();
    this.router.navigateByUrl("/facesnaps");
  }

}
