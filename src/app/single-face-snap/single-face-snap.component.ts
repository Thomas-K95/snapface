import { Component, OnInit } from '@angular/core';
import { FaceSnap } from "../models/face-snap";
import { AsyncPipe, DatePipe, NgClass, NgStyle, UpperCasePipe } from "@angular/common";
import { FaceSnapService } from "../services/face-snaps.service";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { Observable, tap } from "rxjs";

@Component({
    selector: 'app-single-face-snap',
    imports: [NgStyle, NgClass, UpperCasePipe, DatePipe, RouterLink, AsyncPipe],
    templateUrl: './single-face-snap.component.html',
    styleUrl: './single-face-snap.component.scss'
})

export class SingleFaceSnapComponent implements OnInit {
    faceSnap$!: Observable<FaceSnap>;
    snapButtonText!: string;
    userHasSnapped!: boolean;

    constructor(private faceSnapsService: FaceSnapService,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.prepareInterface();
        this.getFaceSnap();
    }

    onSnap(faceSnapId: number): void {
        if (this.userHasSnapped) {
            this.unSnap(faceSnapId);
        } else {
            this.snap(faceSnapId);
        }
    }

    snap(faceSnapId: number) {
        this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
            tap(() => {
                this.snapButtonText = 'Oops, unSnap!';
                this.userHasSnapped = true;
            })
        );

    }

    unSnap(faceSnapId: number) {
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
