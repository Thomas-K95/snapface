import { Component, input, inject } from '@angular/core';
import { FaceSnap } from "../../core/models/face-snap";
import { UpperCasePipe } from "@angular/common";
import { Router } from "@angular/router";

@Component({
    selector: 'app-face-snap-simple-card',
    imports: [UpperCasePipe],
    templateUrl: './face-snap-simple-card.html',
    styleUrl: './face-snap-simple-card.scss'
})

export class FaceSnapSimpleCard {

    private router = inject(Router);
    faceSnap= input.required<FaceSnap>()

    viewFaceSnap() {
        this.router.navigateByUrl(`/facesnaps/${this.faceSnap().id}`);
    }
}
