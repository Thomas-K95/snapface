import { Component, inject, OnInit } from '@angular/core';
import { AuthApi } from "../../core/services/auth-api";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login implements OnInit {

  private authApi = inject(AuthApi);
  private router = inject(Router);

  ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

  login(): void {
    this.authApi.login();
    this.router.navigateByUrl("/facesnaps");
  }

}
