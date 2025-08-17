import { Component, inject } from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule, NgForm, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: 'app-landing-page',
    imports: [FormsModule, ReactiveFormsModule],
    templateUrl: './landing-page.html',
    styleUrl: './landing-page.scss'
})
export class LandingPage {
    private router = inject(Router);


    userEmail!: string;

    continue() {
        this.router.navigateByUrl('/facesnaps');
    }

    submitForm(form: NgForm): void {
        console.log(form.value.userEmail);
    }
}