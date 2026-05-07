import { Component, OnInit, inject } from '@angular/core';
import { FaceSnap } from "../models/face-snap";
import { AsyncPipe, DatePipe, UpperCasePipe } from "@angular/common";
import { FaceSnapApi } from "../face-snap-api";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { Observable, tap } from "rxjs";

@Component({
    selector: 'app-single-face-snap-simple-card',
    imports: [UpperCasePipe, DatePipe, RouterLink, AsyncPipe],
    templateUrl: './single-face-snap.html',
    styleUrl: './single-face-snap.scss'
})

export class SingleFaceSnap implements OnInit {

    private faceSnapsService = inject(FaceSnapApi);
    private route = inject(ActivatedRoute);

    faceSnap$!: Observable<FaceSnap>;
    snapButtonText!: string;
    userHasSnapped!: boolean;

    ngOnInit(): void {
        this.prepareInterface();
        this.getFaceSnap();
    }

    snap(faceSnapId: number): void {
        if (this.userHasSnapped) {
            this.removeSnap(faceSnapId);
        } else {
            this.addSnap(faceSnapId);
        }
    }

    addSnap(faceSnapId: number) {
        this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
            tap(() => {
                this.snapButtonText = 'Oops, unSnap!';
                this.userHasSnapped = true;
            })
        );

    }

    removeSnap(faceSnapId: number) {
        this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
            tap(() => {
                this.snapButtonText = 'Oh Snap!';
                this.userHasSnapped = false;
            })
        );
    }

    private prepareInterface() {
        this.snapButtonText = 'Oh Snap!';
        this.userHasSnapped = false;
    }

    private getFaceSnap() {
        const faceSnapId = this.route.snapshot.params['id'];
        this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
    }
}
