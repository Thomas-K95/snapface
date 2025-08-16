import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule, NgForm, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: 'app-landing-page',
    imports: [FormsModule, ReactiveFormsModule],
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

    userEmail!: string;

    constructor(private router: Router) {
    }

    onContinue() {
        this.router.navigateByUrl('facesnaps');
    }

    onSubmitForm(form: NgForm): void {
        console.log(form.value.userEmail);
    }
}