import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";

@Component({
    selector: 'app-header',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './header.html',
    styleUrl: './header.scss'
})
export class Header {

    private router = inject(Router);

    addNewFaceSnap(): void {
        this.router.navigateByUrl('/facesnaps/create');
    }

}
